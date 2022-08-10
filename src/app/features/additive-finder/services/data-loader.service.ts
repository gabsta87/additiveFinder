import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  itemsData!:any;
  temp!:any;
  myPinnedItems!:any;

  _dbName:string = "additivefinder";

  constructor(
    private readonly _http: HttpClient, 
    private readonly _firestore:Firestore, 
    private readonly _auth : Auth
    ) { }

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
    if(this.isLogged()){
      this.getElements(this._auth.currentUser)
    }
  }

  private async getElements(name:any){
    console.log("name = ",name.uid);
    
    const ref = doc(this._firestore,this._dbName,name?.uid);
    const myDoc:any = await getDoc(ref);
    console.log("data = ",myDoc);
    console.log("data = ",myDoc._document.data.value.mapValue.fields);

  }

  async pinItem(name:string){
    console.log("TODO pin item in firestore");
  }

  async getDataFiltered(criteria:number|undefined,count?:number){
    if(criteria === -1 || criteria === undefined)
      return this.getData(count);

    let temp;
    await this.loadData();
    if(criteria === -2){
      console.log("TODO find pinned items");
      // temp = this.itemsData.filter((e:{name:String}) => this.myPinnedItems.includes(e.name) ).slice(0,count);
    }else{
      temp = this.itemsData.filter((e:{level:String}) => e.level === String(criteria)).slice(0,count);
    }

    return temp;
  }

  async getOnlineData(url:string){
    let onlineData;
    try {
      const request = this._http.get(url);
      onlineData = await firstValueFrom(request);
    } catch (error) {
      url = url.replace("fr","en");
      const request = this._http.get(url);
      onlineData = await firstValueFrom(request);
    }
    return onlineData;
  }

  getElementsCount(){
    return this.itemsData.length;
  }

  isLogged(){
    return this._auth.currentUser;
  }
}
