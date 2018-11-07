import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  show:boolean = false;

 toggleCollapse() {
   this.show = !this.show
 }

  constructor() { }

  ngOnInit() {
  }

}
