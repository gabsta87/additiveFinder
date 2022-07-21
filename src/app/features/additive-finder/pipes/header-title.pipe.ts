import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headerTitle'
})
export class HeaderTitlePipe implements PipeTransform {

  transform(value: string): string {
    let result;
    switch(value){
      case "details":
        result = "Détails";
        break;
      case "search":
        result = "Recherche";
        break;
      case "homepage":
        result = "Liste des additifs"
        break;
      default:
        result = "Erreur"
        break;
    }
    return result;
  }

}
