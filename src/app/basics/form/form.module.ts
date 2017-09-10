import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form/basic-form.component';
import {SharedModule} from "./../../shared/shared.module";
import { InputBoxComponent } from './input-box/input-box.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    BasicFormComponent,
    InputBoxComponent
  ],
  exports: [
    BasicFormComponent
  ]
})
export class FormModule { }
