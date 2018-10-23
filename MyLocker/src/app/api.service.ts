import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './models/LoginResultModel'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<LoginResultModel>{
    console.log(email);
    console.log(password);
    //console.log(this.http.post<LoginResultModel>('http://18.222.132.148:4444/api/user', email));
    return this.http.post<LoginResultModel>('http://18.222.132.148:4444/api/user', { email: email, password: password });
  }
}
