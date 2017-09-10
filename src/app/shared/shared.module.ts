import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeyPipe } from './key.pipe';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [KeyPipe],
  exports: [KeyPipe, ReactiveFormsModule, FormsModule]
})
export class SharedModule { }
