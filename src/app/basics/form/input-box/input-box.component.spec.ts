import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from "./../../../shared/shared.module"
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {By} from "@angular/platform-browser";
import { InputBoxComponent } from './input-box.component';

describe('InputBoxComponent', () => {
  let component: InputBoxComponent;
  let fixture: ComponentFixture<InputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CommonModule],
      declarations: [ InputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBoxComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("Form creation", ()=> {
    beforeEach(() => {
      var form = new FormBuilder().group({
        nombre: ['Armando']
      });
      var question = {
        key: 'nombre',
        value: {
          initValue: "Arnoldo",
          validationMessages: {
            required: "requerido"
          },
          label: 'Nombre',
          controlType: 'textbox',
          type: 'text'
        },
      }
      component.form = form;
      component.question =  question;
      
      fixture.detectChanges();
    })
    it("should create form according to model", ()=> {
      var form = component.form;
      expect(form.controls["nombre"].value).toBe('Armando')
    })
    it("should has same input value and form control", () => {
      var nombre = fixture.debugElement.query(By.css('input[type=text]'));      
      expect(component.form.controls["nombre"].value).toBe(nombre.nativeElement.value)
    })

  })
});
