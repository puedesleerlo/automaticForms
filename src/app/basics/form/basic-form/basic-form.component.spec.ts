import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from "./../../../shared/shared.module"
import { BasicFormComponent } from './basic-form.component';
import { InputBoxComponent } from './../input-box/input-box.component';

import {CustomValidators} from "./form.class";
describe('BasicFormComponent', () => {
  let component: BasicFormComponent;
  let fixture: ComponentFixture<BasicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ BasicFormComponent, InputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormComponent);
    component = fixture.componentInstance;
    component.model = {
      'nombre': {
        initValue: "Arnoldo",
        validationMessages: {
          required: "requerido"
        },
        label: 'Nombre',
        controlType: 'textbox',
        type: 'text'
      },
      'apellido': {
        initValue: "Ruiz",
        validationMessages: {
          required: "requerido"
        },
        label: 'Apellido',
        controlType: 'textbox',
        type: 'text'
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Form basic functions", () => {
    it("should build a group based on a model", ()=> {
      var group = component.buildGroup(component.model);
      for(let key in group) {
        expect(group[key][0]).toBe(component.model[key].initValue)
      }
    })
  });

  describe('Form validity', () => {
    beforeEach(() => {
      component.ngOnInit();
      component.form.markAsDirty();
      fixture.detectChanges();
    });
    it('form invalid when empty', () => {
      expect(component.form.invalid).toBeFalsy();
    });
    it('control nombre is required', () => {
      var nombre = component.form.controls['nombre'];
      nombre.setValue('');
      fixture.detectChanges();
      expect(nombre.valid).toBeFalsy();
    })
    it('should exist validation Messages', ()=> {
      expect(component.validationMessages["apellido"]["required"]).toBe("requerido")
    })
    it('should charge form errors apropiately', () => {
      var apellido = component.form.controls['apellido'];
      apellido.setValue('');
      apellido.markAsDirty();
      expect(apellido.valid).toBeFalsy();
      component.onValueChanged();
      expect(component.formErrors["apellido"]).toBe("requerido ")
    })
  })
});
