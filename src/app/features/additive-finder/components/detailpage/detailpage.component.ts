import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLoaderService } from '../../services/data-loader.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent{

  elementInfo!:any;
  previousPage!:any;
  tempOnlineData!:any;

  constructor(private _route: ActivatedRoute,private readonly _dataLoader : DataLoaderService) {}

  async ionViewWillEnter(){
    let itemId!:number;
    let itemsList!:any;

    itemId = this._route.snapshot.queryParams["item"];
    this.previousPage = this._route.snapshot.queryParams["previousPage"];

    itemsList = await this._dataLoader.getData();
    this.elementInfo = itemsList.find((e:any) => e.id === itemId);

    let wikiUrl = "https://fr.wikipedia.org/api/rest_v1/page/summary/E"+this.elementInfo.id;

    this.tempOnlineData = await this._dataLoader.getOnlineData(wikiUrl);
  }
}
