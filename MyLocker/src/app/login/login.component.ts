import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title ="Login";
  email: any;
  password: any;

  //email = 'peter@klaven';
  //password = 'cityslicka';

  constructor(
    private api: ApiService,
    private customer: CustomerService,
    private router: Router
  ) { }

  tryLogin() {
  this.api.login(
    this.email,
    this.password
  )
    .subscribe(
      r => {
        if (r.token) {
          this.customer.setToken(r.token);
          this.router.navigateByUrl('/dashboard');
        }
      },
      r => {
        alert(r.error.error);
      });
}

  ngOnInit() {
  }

}
