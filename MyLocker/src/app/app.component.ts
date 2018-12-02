import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInAnimation } from './animation';
import { CustomerService } from './customer.service';
import { NeedAuthGuard } from './auth-guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ slideInAnimation ]
})
export class AppComponent {

  animationState: number;

  constructor( private route: ActivatedRoute, private authGuard: NeedAuthGuard, private customer: CustomerService ) { }

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
    if(this.customer.isLogged()){
      this.authGuard.authIsLogged = true;
    }
  }

}
