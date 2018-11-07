import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInAnimation } from './animation';
import { CustomerService } from './customer.service';
import { NeedAuthGuard } from './auth-guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {

  constructor( private route: ActivatedRoute, private authGuard: NeedAuthGuard ) { }

  animationState: number;

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
  }

}
