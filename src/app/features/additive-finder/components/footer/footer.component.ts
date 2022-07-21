import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private readonly _router : Router) { }

  ngOnInit(): void {
  }

  navigateToSearch(){
    console.log("trying to go to search page");
    
    this._router.navigate(["search"]);
  }
}
