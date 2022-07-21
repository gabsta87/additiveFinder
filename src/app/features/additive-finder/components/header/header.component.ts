import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() currentPage!:any;
  @Input() previousPage?:any;

  constructor(private readonly _router: Router ) { }

  ngOnInit(): void {}

  navigateBack(){
    console.log("previous page = ",this.previousPage);
    
    this._router.navigate([this.previousPage]);
  }

}
