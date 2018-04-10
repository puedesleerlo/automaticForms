import { Pipe, PipeTransform } from '@angular/core';
interface Model {
  [key: string]: {
      initValue: any,
      validationMessages?: {
          [key: string]: string
      },
      label: string,
      controlType: string,
      type?: string,
      options?: string[],
  }
}

@Pipe({
  name: 'listFormat'
})
export class ListFormatPipe implements PipeTransform {

  transform(value: Model[], args?: string): any {
    return value.map((v) =>  {
      return {"principal": v[args].initValue,
      "_id": v["_id"].initValue}
    });
  }

}
