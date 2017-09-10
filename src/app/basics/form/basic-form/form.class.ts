import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface Model {
    [key: string]: {
        initValue: any,
        validationMessages?: {
            [key: string]: string
        },
        label: string,
        controlType: string,
        type?: string,
        options?: string[],
    }
  }
interface Group {
    [key: string]: [any, any[]]
}
export abstract class FormClass {
    //private formBuilder: FormBuilder
    public form: FormGroup
    private formSub: Subscription
    public formErrors = {}
    public validationMessages: any
    protected customValidators = CustomValidators;
    constructor(private formBuilder: FormBuilder) {
    }

    public buildGroup(groupo: Model) {
        var model = {}
        for (let key in groupo) {
            
            var field = groupo[key]
            var validators = this.changeValidatorsNameForValidators(field)
           
            if (field.initValue instanceof Array) {
                model[key] = this.buildArray(validators, field.initValue);
            }
            else {
                model[key] = [field.initValue,validators]
            }

        }
        return model;
    }

    private changeValidatorsNameForValidators(field) {
        var validators = []
        for(let val in field.validationMessages) {
            validators.push(this.validatorsList[val])
        }
        return validators
    }

    abstract save(): void;

    buildForm(model: Model, validator?) {
        var group = this.buildGroup(model);
        this.validationMessages = this.getValidationMesages(model);
        this.form = this.initForm(group, validator);
        if (this.formSub) this.formSub.unsubscribe();
        this.formSub = this.form.valueChanges
            .subscribe(data => this.onValueChanged());
        this.onValueChanged();
    }

    initForm(group, validator = null) {
        return this.formBuilder.group(group, { validator });
    }
    onValueChanged() {
        if (!this.form) { return; }
        this.formErrors = errorRecursion(this.form, this.validationMessages);
        if (this.form.errors) {
            const messages = this.validationMessages["form"];
            var text = '';
            this.formErrors["form"] = text;
            for (const key in this.form.errors) {
                text += messages[key] + ' ';
            }
            this.formErrors["form"] = text;
        }
    }
    getValidationMesages(model) {
        var validationMessages = {}
        for (let key in model) {
            validationMessages[key] = model[key].validationMessages
        }
        return validationMessages;
    }
    isFieldInvalid(field: string) {
        return (!this.formErrors[field]) ? "primary" : "warn";
    }
    isFormInvalidOrPristine() {
        return (this.form.invalid || this.form.pristine);
    }
    canDeactivate(): Promise<boolean> | boolean {
        if (!this.form || this.form.pristine) return true;
        var exit = window.confirm("Descartar los cambios?");
        //if (exit) this.detailAccountForm.reset();
        return exit;
    }
    reset(init = {}) {
        this.buildForm(init);
    }
    help() {

    }
    buildArray(validators?, array?: any[]) {
        return this.formBuilder.array(array || [], validators || CustomValidators.lengthArray());
    }
    validatorsList = {
        'required' : CustomValidators.required(),
        'numberIsHigherThanZero': CustomValidators.numberIsHigherThanZero()
    }

}
function errorRecursion(form, validationMessages, formErrors = {}, pathV = null): Object {
    var _ = require('lodash');

    if (form.invalid && form.dirty) {
        
        for (const field in form.controls) {
            const pathe = pathV ? pathV + "." + field : field
            const control = form.get(field);
            if (control && control.dirty && control.invalid) {
                const messages = validationMessages[field];

                if (control.errors) {
                    _.set(formErrors, pathe, '')
                    var text = '';
                    for (const key in control.errors) {
                        text += messages[key] + ' ';
                    }
                    _.set(formErrors, pathe, text)
                }
                else if (control.controls) {
                    var fielde = pathV ? pathV + "." + field : field;
                    errorRecursion(control, validationMessages, formErrors, pathe);
                }

            }
        }
    }
    return formErrors
}

export class CustomValidators {
    public static numberIsHigherThanZero(): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            const cantidad = control.value;
            const no = cantidad > 0;
            return no ? null : { negative: false };
        };
    }
    public static dateIsPast(): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            var moment = require('moment/moment');
            const fecha = control.value;
            const no = moment(fecha).isBefore(new Date);
            return no ? null : { past: false };
        };
    }
    public static lengthArray(): ValidatorFn {
        return (control: FormArray): { [key: string]: any } => {
            const no = control.length > 0;
            return no ? null : { length: false };
        };
    }
    public static compareArrayWithNumber(arrayField, fieldInArray, max: number): ValidatorFn {
        return (control: FormGroup): { [key: string]: any } => {
            const array = control.value[arrayField];
            let amount = 0;
            if (array.length > 0) {
                amount = array.map(i => i[fieldInArray]).reduce((a, b) => a + b, 0);
            }
            const no = amount >= max;
            return no ? null : { maxArray: false };
        };
    }
    public static numberMaxValidator(max: number): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            const cantidad = control.value;
            const no = cantidad >= max;
            return no ? null : { max: false };
        };
    }
    public static required() {
        return Validators.required
    }
    public static compareDates(start, end) {
        return (control: FormGroup): { [key: string]: any } => {
            var moment = require('moment/moment');
            const no = moment(control.value[start]).isAfter(control.value[end]);
            return no ? null: {dateOrder: false}
        }
    }
}