import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';

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
    private customer: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  tryRegister() {
    this.api.register(this.first_name, this.last_name, this.email, this.password).subscribe(
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
