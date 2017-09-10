import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToolsFormResolveService} from "./tool-form.resolve";
import { InventoryComponent } from './inventory/inventory.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolFormComponent } from './tool-form/tool-form.component';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';
import {InventoryModule} from "./inventory.module"

const toolsRoutes: Routes = [
  {
    path: 'tools',
    component: InventoryComponent,
    children: [
      {
        path: '',
        component: ToolListComponent,
        children: [
          {
            path: ':id',
            component: ToolDetailComponent,
            resolve: {
              tool: ToolsFormResolveService
            }
          },
          {
            path: '',
            component: ToolFormComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(toolsRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ToolsFormResolveService,
  ]
})
export class InventoryRoutingModule { }
