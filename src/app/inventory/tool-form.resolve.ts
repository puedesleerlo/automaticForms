import { Injectable } from "@angular/core";
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';


@Injectable()
export class ToolsFormResolveService implements Resolve<any> {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        var model = require("./fake.json");
        
        return new Promise((resolve, reject) => {
            resolve(model[0]);
        }).then(toolCursor => {
            return toolCursor
        });
    }
}