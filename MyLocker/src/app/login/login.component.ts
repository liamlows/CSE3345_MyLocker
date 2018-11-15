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

  title ="Login";

  email: string;
  password: string;

  constructor(
    private api: ApiService,
    private customer: CustomerService,
    private router: Router
  ) { }

  tryLogin() {
    this.api.login(this.email, this.password).subscribe(
      r => {
        this.customer.removeUser();

        if (r.loginAuth == '1') {
          //id: string, fname: string, lname: string, email: string
          //this.customer.setUser()
          //this.customer.setToken(r.loginAuth);
          this.customer.setUser(r.id, r.first_name, r.last_name, r.email);
          this.router.navigateByUrl('/dashboard');
        }

        else if(r.loginAuth == '0'){
          alert("Invalid User or Password.");
          //alert(r.error.error);
        }

        else{
          alert("Unexpected login error...")
        }
      }//,          WHY USE ANOTHER R HERE????????????????????????????
      // r => {
      //   alert(r.error.error);
      // }
    );
  }

  ngOnInit() {
  }

}
