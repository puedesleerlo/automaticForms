import { ListFormatPipe } from './list-format.pipe';

describe('ListFormatPipe', () => {
  const pipe = new ListFormatPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it ('should transform model into list format', () => {
    var model = [
      {
        "createdBy": {
          "controlType": "",
          "label": "Creado por",
          "initValue": "Newman Stevens"
        },
        
        "referencia": {
          "type": "text",
          "controlType": "textbox",
          "label": "Referencia",
          "validationMessages": {
            "required": "requerido"
          },
          "initValue": "Recrisys"
        },
        "_id": {
          "controlType": "",
          "label": "Id",
          "initValue": "59b5ea1b7a939d1b2af31c35"
        }
      },
      {
        
        "createdBy": {
          "controlType": "",
          "label": "Creado por",
          "initValue": "Jaime Hart"
        },
        "referencia": {
          "type": "text",
          "controlType": "textbox",
          "label": "Referencia",
          "validationMessages": {
            "required": "requerido"
          },
          "initValue": "Overplex"
        },
        "_id": {
          "controlType": "",
          "label": "Id",
          "initValue": "59b5ea1ba5c16e5d6d0ecd98"
        }
      },
      {
        
        "createdBy": {
          "controlType": "",
          "label": "Creado por",
          "initValue": "Oneil Avery"
        },
        "referencia": {
          "type": "text",
          "controlType": "textbox",
          "label": "Referencia",
          "validationMessages": {
            "required": "requerido"
          },
          "initValue": "Pyramia"
        },
        "_id": {
          "controlType": "",
          "label": "Id",
          "initValue": "59b5ea1bd67b4173b9c1201d"
        }
      },
      
    ]
    var trans = pipe.transform(model, "referencia")
    
    expect(trans).toEqual([
      {principal: "Recrisys", _id: "59b5ea1b7a939d1b2af31c35"}, 
      {principal: "Overplex", _id: "59b5ea1ba5c16e5d6d0ecd98"},
      {principal: "Pyramia", _id: "59b5ea1bd67b4173b9c1201d"}]);
  });
});
