import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  itemsData!:any;

  constructor(private readonly _http: HttpClient) { }

  async getData(){
    if(!this.itemsData){
      const url = '../assets/data/db.json';
      const request = this._http.get(url);
      this.itemsData = await firstValueFrom(request);
    }
    return this.itemsData;
  }

  async getOnlineData(url:string){
    const request = this._http.get(url);
    const onlineData = await firstValueFrom(request);
    return onlineData;
  }
}
