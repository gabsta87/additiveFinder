import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataLoaderService } from '../../services/data-loader.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  itemsListSize = 30;
  itemsList!:{name:string,id:string,type:string,level:string,info:string}[];

  constructor(private readonly _router : Router,private readonly _dataLoader : DataLoaderService) {}

  async ngOnInit() {
    this.itemsList = await this._dataLoader.getData(this.itemsListSize);
  }

  seeDetails(chosenItem:{name:string,id:string,type:string,level:string,info:string}){
    this._router.navigate(["details"],{queryParams:{item:chosenItem.id,previousPage:"homepage"}})
  }

  async loadData(event:any){
    this.itemsListSize += 30;

    this.itemsList = await this._dataLoader.getData(this.itemsListSize);

    setTimeout(() => {
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.itemsList.length === this._dataLoader.getElementsCount()) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
