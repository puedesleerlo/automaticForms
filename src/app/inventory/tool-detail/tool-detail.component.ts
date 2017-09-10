import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs"
@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.css']
})
export class ToolDetailComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }
  model: any
  ngOnInit() {
    this.route.data
    .subscribe((data: { tool: Observable<any> }) => {
      console.log
      if(data.tool) {
        this.model = data.tool
      }
        

    });
  }

}
