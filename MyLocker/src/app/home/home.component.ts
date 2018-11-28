import { Component, OnInit, AfterViewInit, } from "@angular/core";
import {  trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('imgSlideLeft', [
      state('out, void', style({
        transform: 'translateX(0%)',
        opacity: 0
      })),
      state('in', style({
        transform: 'translateX(100%)',
        opacity: 1
      })),
      transition('out => in', animate('500ms'))
    ])
  ]
})
export class HomeComponent implements AfterViewInit {

  state:string = 'out';

  ngAfterViewInit() {
    this.state = 'in';
  }

}
