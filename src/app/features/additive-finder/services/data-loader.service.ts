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
    await this.loadData();
    return this.itemsData.slice(0,count);
  }

  async loadData(){
    if(!this.itemsData){
      const url = './assets/data/db.json';
      const request = this._http.get(url);
      this.temp = await firstValueFrom(request);
      this.itemsData = this.temp.additives;
    }
  }

  async getDataFiltered(criteria:number|undefined,count?:number){
    if(criteria === -1 || criteria === undefined)
      return this.getData(count);
    await this.loadData();
    let temp = this.itemsData.filter((e:{level:String}) => e.level === String(criteria)).slice(0,count);
    return temp;
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
