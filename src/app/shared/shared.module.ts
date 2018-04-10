import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeyPipe } from './key.pipe';
import { MaterialModule } from "./material.module";
import { ListFormatPipe  } from "./list-format.pipe";
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, 
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [KeyPipe, ListFormatPipe],
  exports: [
    KeyPipe, 
    ReactiveFormsModule, 
    FormsModule, 
    MaterialModule, 
    ListFormatPipe,
    FlexLayoutModule]
})
export class SharedModule { }
