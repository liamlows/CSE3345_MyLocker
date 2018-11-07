import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './models/LoginResultModel'
import {RegisterResultModel} from './models/RegisterResultModel'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('http://18.222.132.148:4444/api/login', { email, password });
  }

  register(firstname: string, lastname: string, email: string, password: string): Observable<RegisterResultModel>{
    console.log(firstname, lastname, email, password);

    return this.http.post<RegisterResultModel>(
      'http://18.222.132.148:4444/api/register',
      {first_name: firstname, last_name: lastname, email: email, password: password}
    );
  }
}
