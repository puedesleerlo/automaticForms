import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolFormComponent } from './tool-form/tool-form.component';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';
import { ToolService } from "./tool.service"
import { BasicsModule} from "../basics/basics.module"
import {InventoryRoutingModule} from "./inventory.routing"
@NgModule({
  imports: [
    CommonModule,
    BasicsModule,
    InventoryRoutingModule
  ],
  providers: [ToolService],
  declarations: [InventoryComponent, ToolListComponent, ToolFormComponent, ToolDetailComponent]
})
export class InventoryModule {
 }
