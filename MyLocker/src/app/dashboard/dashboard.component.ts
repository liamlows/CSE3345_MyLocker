import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NeedAuthGuard } from '../auth-guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title="My Account";
  curFirstName=`${this.customer.getFirstName()}`;
  curLastName=`${this.customer.getLastName()}`;
  curEmail=`${this.customer.getEmail()}`;

  //curFirstName:string = "Bobby";
  //curLastName:string = "Blue";
  //curEmail:string = "bob.blue@bobby.com";

  id:string;
  email:string;
  firstName:string;
  lastName:string;
  password:string;
  passwordConfrim:string;

  constructor(
  private api: ApiService,
  private customer: CustomerService,
  private router: Router,
  private authGuard: NeedAuthGuard,
  private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  updateEmail() {
    this.api.updateEmailById(this.customer.getId(),this.email);
    this.email = '';
  }

  updateName() {
    this.api.updateNameById(this.customer.getId(),this.firstName, this.lastName);
    this.firstName = '';
    this.lastName = '';
  }

  updatePassword() {
    this.api.updatePasswordById(this.customer.getId(), this.password);
    this.password = '';
    this.passwordConfrim = '';
  }

  deleteAccount() {
    if(window.confirm("Are you sure you want to delete your account?")){
      this.api.deleteAccountById(this.customer.getId());
      // .subscribe(
      //   () => {
      //     this.accountlist.splice(index,1);
      //   });
    }
  }

}
