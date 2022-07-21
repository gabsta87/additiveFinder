import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dangerText'
})
export class DangerTextPipe implements PipeTransform {

  transform(value: string): string {
    let output;
    switch(value){
      case "0":
        output = "Acceptable";
        break;
      case "1":
        output = "To avoid";
        break;
      case "2":
        output = "Controversial";
        break;
      case "3":
        output = "Danger";
        break;
      default:
        output = "Error";
        break;
    };
    return output;
  }

}
