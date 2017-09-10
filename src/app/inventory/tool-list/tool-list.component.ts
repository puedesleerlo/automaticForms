// This componente show us the tool list and let us watch a detailed view
// Este componente muestra la lista de herramientas y permite acceder a la vista de detalle

import { Component, OnInit } from '@angular/core';
import {ToolService} from "./../tool.service"
@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {
  hola = "hola"
  constructor(private service: ToolService) { }

  ngOnInit() {
    this.hola = "Hola"
  }

}
