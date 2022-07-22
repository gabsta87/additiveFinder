import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  itemsData!:any;
  temp!:any;

  constructor(private readonly _http: HttpClient) { }

  async getData(count?:number){
    if(!this.itemsData){
      const url = './assets/data/db.json';
      const request = this._http.get(url);
      this.temp = await firstValueFrom(request);
      this.itemsData = this.temp.additives;
    }
    return this.itemsData.slice(0,count);
  }

  async getOnlineData(url:string){
    const request = this._http.get(url);
    const onlineData = await firstValueFrom(request);
    return onlineData;
  }

  getElementsCount(){
    return this.itemsData.length;
  }
}
