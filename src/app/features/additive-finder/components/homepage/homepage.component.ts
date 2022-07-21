import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataLoaderService } from '../../services/data-loader.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  itemsList!:{name:string,id:string,type:string,level:string,info:string}[];

  constructor(private readonly _router : Router,private readonly _dataLoader : DataLoaderService) {}

  async ngOnInit() {
    let tmp:any = await this._dataLoader.getData();
    console.log("loaded ",tmp);
    
    this.itemsList = tmp.additives;
  }

  seeDetails(chosenItem:{name:string,id:string,type:string,level:string,info:string}){
    this._router.navigate(["details"],{queryParams:{item:chosenItem.id,previousPage:"homepage"}})
  }

  loadData($event:any){
    console.log("infinite scroll event = ",$event);
  }
}
