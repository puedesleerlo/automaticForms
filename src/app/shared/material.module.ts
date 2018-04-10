import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdGridListModule, 
    MdListModule} from '@angular/material';


@NgModule({
    imports: [MdButtonModule, MdCheckboxModule, MdGridListModule, MdListModule],
    exports: [MdButtonModule, MdCheckboxModule, MdGridListModule, MdListModule],
    providers: [],
})
export class MaterialModule { }
