import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
//import {LoginResultModel} from './models/LoginResultModel'
import { RegisterResultModel, LoginResultModel, Product } from './models';
//import {RegisterResultModel} from './models/RegisterResultModel'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected endPoint = 'http://18.222.132.148:4444/api';

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>(`${this.endPoint}/login`, { email, password });
  }

  register(firstname: string, lastname: string, email: string, password: string): Observable<RegisterResultModel>{
    console.log(firstname, lastname, email, password);

    return this.http.post<RegisterResultModel>(
      'http://18.222.132.148:4444/api/register',
      {first_name: firstname, last_name: lastname, email: email, password: password}
    );
  }

  getAllData(): Observable<Product> {
    return this.http.get<Product>(`${this.endPoint}/products`);
    // this.httpOptions).pipe(catchError<ItempageComponent>(this.handleException));
  }

  // getFavorites(): Observable<Product> {
  //   return this.http.get<Product>(`${this.endPoint}/favorites`);
  // }

  //+++++++++++++++++++  DASHBOARD CONTROLS  +++++++++++++++++++++++
  deleteAccountById(id:string){
    //DELETE ACCOUNT

  }

  updateEmailById(id:string, email:string){

  }

  updateNameById(id:string, firstname:string, lastname:string){

  }

  updatePasswordById(id:string, password:string){

  }

}
