import { Injectable } from '@angular/core';
import {Inventory} from "./inventory"

@Injectable()
export class ToolService {
  tools: Inventory.Tool[]
  constructor() { }
  getTools() {

  }

}
