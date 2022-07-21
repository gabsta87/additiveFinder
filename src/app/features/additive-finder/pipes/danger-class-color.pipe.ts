import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dangerClassColor'
})
export class DangerClassColorPipe implements PipeTransform {

  transform(value: string): string {
    let output;
    switch(value){
      case "0":
        output = "code_acceptable";
        break;
      case "1":
        output = "code_avoid";
        break;
      case "2":
        output = "code_controversy";
        break;
      case "3":
        output = "code_danger";
        break;
      default:
        output = "error";
        break;
    };
    return output;
  }

}
