import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title="My Account";
  name=this.customer.getName();

  constructor(
  private api: ApiService,
  private customer: CustomerService,
  private router: Router
  ) { }

  tryLogout() {
    //alert("logged out");
    this.customer.removeToken();
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
