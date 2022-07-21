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

  constructor(private _route: ActivatedRoute,private readonly _dataLoader : DataLoaderService) {}

  async ionViewWillEnter(){
    let itemId!:number;
    let itemsList!:any;

    itemId = this._route.snapshot.queryParams["item"];
    this.previousPage = this._route.snapshot.queryParams["previousPage"];

    itemsList = await this._dataLoader.getData();
    this.elementInfo = itemsList.find((e:any) => e.id === itemId);

    let tempName = this.elementInfo.name.split(" ")[0];

    let wikiUrl = "https://fr.wikipedia.org/w/api.php?action=parse&page="+tempName+"&format=json";

    console.log("url = ",wikiUrl);

    // let tempOnlineData = await this._dataLoader.getOnlineData(wikiUrl);
    // console.log("online data = ",tempOnlineData);
  }
}
