import { Injectable } from '@angular/core';
import {Inventory} from "./inventory"

@Injectable()
export class ToolService {
  tools: Inventory.Tool[] = require("./fake.json");
  constructor() { }
  getTools() {
    return this.tools;
  }

}
