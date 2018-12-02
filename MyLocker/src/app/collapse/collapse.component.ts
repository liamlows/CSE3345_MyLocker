import { Component, OnInit } from '@angular/core';
import { NeedAuthGuard } from '../auth-guard';
import { trigger, transition, style, animate } from '../../../node_modules/@angular/animations';
import { CustomerService } from '../customer.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'ngbd-collapse-component',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css'],
  animations: [
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
  ]
})
export class CollapseComponent implements OnInit {

  public isCollapsedFav = true;

  constructor(
    private authGuard: NeedAuthGuard,
    private customer: CustomerService,
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
