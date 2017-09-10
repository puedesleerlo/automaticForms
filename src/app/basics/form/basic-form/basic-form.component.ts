import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from "@angular/core";
import { FormClass, CustomValidators } from "./form.class"
import { FormBuilder} from '@angular/forms';
interface Model {
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

@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})


export class BasicFormComponent extends FormClass implements OnInit{
  constructor(formBuilder: FormBuilder) {
    super(formBuilder)
  }
  @Input() model: Model;
  @Output() up: EventEmitter<string> = new EventEmitter<string>();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.buildForm(this.model)
  }
  save() {
    this.up.emit("hola")
  }
  delete() {
    this.remove.emit("hola")
  }

}