import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { DataLoaderService } from '../../services/data-loader.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit{

  searchValue!:string;
  
  itemsList!:any;
  
  constructor(private readonly _router : Router, private readonly _dataLoader : DataLoaderService){ }
  
  async ngOnInit() {
    let temp = await this._dataLoader.getData();
    this.itemsList = temp.additives;
  }
  
  startSearch1() {
    let elementInfo = this.itemsList.find((e:any) => e.id === this.searchValue);
    if(!elementInfo){
      this.searchValue = "";
    }else{
      this._router.navigate(["details"],{queryParams:{item:this.searchValue,previousPage:"search"}})
    }
  }
  // startSearch2(val:IonInput){
  //   console.log("searching ",val);
  //   // this._router.navigate(["details"],{queryParams:{item:chosenItem.id}})
  // }
}
