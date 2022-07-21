import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dangerColor'
})
export class DangerColorPipe implements PipeTransform {

  transform(value: number): string {
    let output;
    switch(value){
      case 0:
        output = "green";
        break;
      case 1:
        output = "yellow";
        break;
      case 2:
        output = "orange";
        break;
      case 3:
        output = "red";
        break;
      default:
        output = "lightgrey";
        break;
    };
    return output;
  }
}
