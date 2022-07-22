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
  selectedCategory?:number = -1;

  constructor(private readonly _router : Router,private readonly _dataLoader : DataLoaderService) {}

  async ngOnInit() {
    this.itemsList = await this._dataLoader.getData(this.itemsListSize);
  }

  seeDetails(chosenItem:{name:string,id:string,type:string,level:string,info:string}){
    this._router.navigate(["details"],{queryParams:{item:chosenItem.id,previousPage:"homepage"}})
  }

  async loadData(event:any){
    this.itemsListSize += 30;

    this.itemsList = await this._dataLoader.getDataFiltered(this.selectedCategory,this.itemsListSize);
    event.target.complete();

    if (this.itemsList.length >= this._dataLoader.getElementsCount()) {
      event.target.disabled = true;
    }
  }

  async filterItemsList(event:any){
    this.selectedCategory = event;
    this.itemsList = await this._dataLoader.getDataFiltered(event,this.itemsListSize);
  }


}
