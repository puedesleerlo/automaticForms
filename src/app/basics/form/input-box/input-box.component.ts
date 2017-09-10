import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl }        from '@angular/forms';

export interface Question {
  key: string,
  value: {
      initValue: any,
      validationMessages: {
          [key: string]: string
      },
      label: string,
      controlType: string,
      type?: string,
      options?: string[],
  }
}

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})

export class InputBoxComponent implements OnInit {
  @Input() question: Question = {
    key: 'mur', 
    value: {
      label: 'Mur', 
      controlType: 'textbox', 
      type: 'text',
      initValue: 'murito',
      validationMessages: {
          'required': 'string'
      },
    }
  };
  @Input() form: FormGroup = new FormGroup({
    mur: new FormControl('Nancy'),

  });
  
  constructor() { }

  ngOnInit() {

  }

  get isValid() { return this.form.controls[this.question.key].valid; }

}
