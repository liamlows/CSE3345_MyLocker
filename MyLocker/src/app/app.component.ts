import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {

  constructor( private route: ActivatedRoute ) { }

  animationState: number;

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
  }

}
