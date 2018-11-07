import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title="Registration";

  first_name: string;
  last_name: string;
  email: string;
  password: string;

  constructor(
    private api: ApiService,
    // private customer: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  tryRegister() {
    this.api.register(this.first_name, this.last_name, this.email, this.password);
    // .subscribe(
    //   r => {
    //     this.customer.removeToken();
    //     if (r.loginAuth == '1') {
    //       this.customer.setToken(r.loginAuth);
    //       this.customer.setName(this.email);
    //       this.router.navigateByUrl('/dashboard');
    //     }
    //     else if(r.loginAuth == '0'){
    //       alert("Invalid User or Password.");
    //       //alert(r.error.error);
    //     }
    //     else{
    //       alert("Error: Please enter a valid Email and Password")
    //     }
    //   }//,          WHY USE ANOTHER R HERE????????????????????????????
    //   // r => {
    //   //   alert(r.error.error);
    //   // }
    // );
  }

}
