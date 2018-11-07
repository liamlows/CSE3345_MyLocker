import { Component, OnInit } from '@angular/core';
import { NeedAuthGuard } from '../auth-guard';
import { trigger, transition, style, animate } from '../../../node_modules/@angular/animations';

@Component({
  selector: 'ngbd-collapse-component',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class CollapseComponent implements OnInit {

  public isCollapsed = true;

  constructor(private authGuard: NeedAuthGuard) { }

  ngOnInit() {
  }

}
