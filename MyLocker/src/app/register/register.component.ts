import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../models/api.service';
import { CustomerService } from '../models/customer.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title="Registration";

  registerControl:any={};

  constructor(
    private api: ApiService,
    private customer: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  tryRegister() {
    this.api.register(this.registerControl.first_name, this.registerControl.last_name, this.registerControl.email, this.registerControl.password).subscribe(
      r => {
        if(r.errorCode == '-1'){
          alert("Invalid registration parameters.");
        }
        else if(r.errorCode == '1'){
          //id: string, fname: string, lname: string, email: string
          this.customer.setUser(r.id, r.first_name, r.last_name, r.email);
          this.router.navigateByUrl('/dashboard');
        }
        else{
          alert("Unexpected registration error...")
        }
      }
    );
  }

}
