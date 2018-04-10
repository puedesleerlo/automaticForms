import { Component, OnInit } from '@angular/core';
import { ToolService } from "../tool.service";
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private toolService: ToolService) { }
  items: any[]
  ngOnInit() {
    this.items = this.toolService.getTools();
  }

}
