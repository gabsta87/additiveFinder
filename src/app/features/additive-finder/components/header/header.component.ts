import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() currentPage!:any;
  @Input() previousPage?:any;
  @Output() itemChosen : EventEmitter<number> = new EventEmitter();

  constructor(private readonly _router: Router ) { }

  ngOnInit(): void {}

  navigateBack(){
    this._router.navigate([this.previousPage]);
  }

  selectItemLevel(value:number){
    this.itemChosen.emit(value);
  }
}
