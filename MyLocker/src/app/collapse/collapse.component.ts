import { Component, OnInit } from '@angular/core';
import { NeedAuthGuard } from '../auth-guard';
import { trigger, transition, style, animate, state } from '../../../node_modules/@angular/animations';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { FavoritesComponent } from '../models/favorites/favorites.component';

@Component({
  selector: 'ngbd-collapse-component',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate('200ms', style({transform: 'translateX(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0%)', opacity: 1}),
        animate('5000ms', style({transform: 'translateX(-100%)', opacity: 0}))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('200ms', style({transform: 'translateX(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(100%)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(0)', opacity: 0}))
      ])
    ]),
    // trigger('slideInOut2', [
    //   state('in', style({
    //     transform: 'translate3d(0, 0, 0)'
    //   })),
    //   state('out', style({
    //     transform: 'translate3d(-100%, 0, 0)'
    //   })),
    //   transition('in => out', animate('400ms ease-in-out')),
    //   transition('out => in', animate('400ms ease-in-out'))
    // ])
  ]
})
export class CollapseComponent implements OnInit {

  // state: string = 'out';
  stateBool: boolean = false;

  // animateMe() {
  //   this.state = (this.state === 'out' ? 'in' : 'out');
  // }

  public isCollapsed = true;
  public isCollapsedFav = true;

  constructor(
    private authGuard: NeedAuthGuard,
    private customer: CustomerService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

  }

  tryLogout() {
    this.customer.removeUser();
    this.authGuard.authIsLogged = false;
    if(this.router.url === '/dashboard'){
      this.router.navigateByUrl('/home');
    }
  }


}
