import { Component, OnInit } from '@angular/core';
import { ApiService } from '../models/api.service';
import { CustomerService } from '../models/customer.service';
import { Router } from '@angular/router';
import { NeedAuthGuard } from '../models/auth-guard';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title="My Account";

  id:string;
  emailText:string = `${this.customer.getEmail()}`;
  firstNameText:string = `${this.customer.getFirstName()}`;
  lastNameText:string = `${this.customer.getLastName()}`;
  passwordText:string;
  passwordConfirmText:string;

  constructor(
  private api: ApiService,
  private customer: CustomerService,
  private router: Router,
  private authGuard: NeedAuthGuard,
  ) { }

  ngOnInit() {
  }

  updateEmail() {
    this.api.updateEmailById(this.customer.getId(),this.emailText).subscribe(
      result => {
        this.customer.setEmail(result.email);
        this.emailText = result.email;
      }
    );
  }

  updateName() {
    this.api.updateNameById(this.customer.getId(),this.firstNameText, this.lastNameText).subscribe(
      result =>{
        this.customer.setName(result.first_name, result.last_name);
        this.firstNameText = result.first_name;
        this.lastNameText = result.last_name;
      }
    );
  }

  updatePassword() {
    this.api.updatePasswordById(this.customer.getId(), this.passwordText).subscribe(
      () => {}
    );
  }

  deleteAccount() {
    if(window.confirm("Are you sure you want to delete your account?")){
      this.api.deleteAccountById(this.customer.getId()).subscribe(
        () => {
          window.alert("Account Deleted!");
          this.customer.removeUser();
          this.authGuard.authIsLogged = false;
          this.router.navigateByUrl('/home');
        }
      );
    }
  }

}
