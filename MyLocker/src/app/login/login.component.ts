import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  loginControl:any = {};

  constructor(
    private api: ApiService,
    private customer: CustomerService,
    private router: Router
  ) { }

  tryLogin() {
    this.api.login(this.loginControl.email, this.loginControl.password).subscribe(
      r => {
        this.customer.removeUser();

        if (r.loginAuth == '1') {
          this.customer.setUser(r.id, r.first_name, r.last_name, r.email);
          this.router.navigateByUrl('/dashboard');
        }

        else if(r.loginAuth == '0'){
          alert("Invalid User or Password.");
        }

        else{
          alert("Unexpected login error...")
        }
      }
    );
  }

  ngOnInit() {
  }

}
