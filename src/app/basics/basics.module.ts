import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormModule} from "./form/form.module";
import {ListComponent} from "./list/list.component"
import {SharedModule} from "../shared/shared.module"
@NgModule({
  imports: [
    CommonModule,
    FormModule,
    SharedModule
  ],
  declarations: [ListComponent],
  exports: [FormModule, ListComponent]
})
export class BasicsModule { }
