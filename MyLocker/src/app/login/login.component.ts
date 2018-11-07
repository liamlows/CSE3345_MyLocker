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

  //email = 'peter@klaven';
  //password = 'cityslicka';

  constructor(
    private api: ApiService,
    private customer: CustomerService,
    private router: Router
  ) { }

  tryLogin() {
    this.api.login(this.email, this.password).subscribe(
      r => {
        this.customer.removeToken();
        if (r.loginAuth == '1') {
          this.customer.setToken(r.loginAuth);
          this.customer.setName(this.email);
          this.router.navigateByUrl('/dashboard');
        }
        else if(r.loginAuth == '0'){
          alert("Invalid User or Password.");
          //alert(r.error.error);
        }
        else{
          alert("Error: Please enter a valid Email and Password")
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
