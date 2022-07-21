import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  itemsList:any = [{name:"first elem",id:"E100",type:"colorant",level:"2"},{name:"second elem",id:"E101",type:"colorant",level:"0"}];

  constructor(private readonly _router : Router) {}

  ngOnInit(): void {}

  seeDetails(chosenItem:{name:string,id:string,type:string,level:number}){
    this._router.navigate(["login"],{queryParams:{lastname:'Maret',firstname:"Gabriel"}})
  }
}
