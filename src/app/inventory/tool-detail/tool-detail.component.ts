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
      console.log(data.tool)
      if(data.tool) {
        this.model = data.tool
      }
      else {
        this.model = {
          "prestadas": {
            "controlType": "",
            "label": "Prestadas",
            "initValue": null
          },
          "createdBy": {
            "controlType": "",
            "label": "Creado por",
            "initValue": "Maxine Wooten"
          },
          "createdAt": {
            "controlType": "",
            "label": "Creado en",
            "initValue": "Fri Aug 28 2015 15:55:35 GMT+0000 (UTC)"
          },
          "imageUrl": {
            "controlType": "",
            "label": "Url",
            "initValue": "http://placehold.it/32x32"
          },
          "imageId": {
            "controlType": "",
            "label": "ImageId",
            "initValue": "59b5ea1bd1b756c2d89325eb"
          },
          "disponibles": {
            "controlType": "",
            "label": "disponibles",
            "initValue": null
          },
          "cantidad": {
            "type": "number",
            "controlType": "textbox",
            "label": "Cantidad",
            "validationMessages": {
              "required": "required"
            },
            "initValue": 7
          },
          "facturas": {
            "controlType": "array",
            "label": "Facturas",
            "initValue": [
              {
                "monto": "$2,079.56",
                "existencias": 3,
                "proveedor": "Aquoavo",
                "concepto": "ipsum",
                "_id": "59b5ea1bc99f81fd20ebe7f4"
              },
              {
                "monto": "$3,779.12",
                "existencias": 3,
                "proveedor": "Digifad",
                "concepto": "anim",
                "_id": "59b5ea1ba8bf3802a5e24836"
              },
              {
                "monto": "$3,009.12",
                "existencias": 3,
                "proveedor": "Kyagoro",
                "concepto": "tempor",
                "_id": "59b5ea1b874d705d632f0ff5"
              }
            ]
          },
          "dependencia": {
            "options": [
              "Instrumentación",
              "Laboratorio Mecánica"
            ],
            "controlType": "dropdown",
            "label": "dependencia",
            "validationMessages": {
              "required": "requerido"
            },
            "initValue": "Instrumentación"
          },
          "fabricante": {
            "type": "text",
            "controlType": "textbox",
            "label": "Compañía",
            "validationMessages": {
              "required": "requerido"
            },
            "initValue": "Eventex"
          },
          "elemento": {
            "type": "text",
            "controlType": "textbox",
            "label": "Elemento",
            "validationMessages": {
              "required": "requerido"
            },
            "initValue": "officia"
          },
          "referencia": {
            "type": "text",
            "controlType": "textbox",
            "label": "Referencia",
            "validationMessages": {
              "required": "requerido"
            },
            "initValue": "Bedder"
          },
          "_id": {
            "controlType": "",
            "label": "Id",
            "initValue": "59b5ea1bcb72ee9e5f1dc0a2"
          }
        }
      }
    });
  }

}
