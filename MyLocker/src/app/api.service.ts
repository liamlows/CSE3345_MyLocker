import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { RegisterResultModel, LoginResultModel, Product, Favorite, Email, Name, Rating } from './models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API URL
  protected endPoint = 'http://18.222.132.148:4444/api';

  constructor(private http: HttpClient) {}

//+++++++++++++++++++  LOGIN/REGISTER CONTROLS  +++++++++++++++++++++++
  //GOOD
  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>(
      `${this.endPoint}/login`,
      {email, password}
    );
  }

  //GOOD
  register(firstname: string, lastname: string, email: string, password: string): Observable<RegisterResultModel>{
    return this.http.post<RegisterResultModel>(
      `${this.endPoint}/register`,
      {first_name: firstname, last_name: lastname, email: email, password: password}
    );
  }

//+++++++++++++++++++  PRODUCT FETCH CONTROLS  +++++++++++++++++++++++

  setProductRating(itemId:number, rating:number): void {
  // : Observable<Product[]>{
  //   return this.http.post<Product[]>(
  //     `${this.endPoint}/products/${itemId}`, {rating}
  //   );
    console.log(itemId, rating);
  }

  // getProductRating(): Observable<Rating>{
  //   return this.http.get<Rating>(`${this.endPoint}/rating/`);
  // }

  //GOOD
  getAllData(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.endPoint}/products`
    );
    // this.httpOptions).pipe(catchError<ItempageComponent>(this.handleException));
  }

  //GOOD
  getFavorites(uId:string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endPoint}/favorites/${uId}`);
  }

  //GOOD
  removeFavorite(favId:string):Observable<{}>{
    return this.http.delete(`${this.endPoint}/unfavorite/${favId}`);
  }

  //GOOD
  addFavorite(prod_id:string, user_id:string): Observable<Favorite>{
    return this.http.post<Favorite>(`${this.endPoint}/favorite`, {prod_id, user_id});
  }

//+++++++++++++++++++  DASHBOARD CONTROLS  +++++++++++++++++++++++
  //!!!! NOPE !!!!
  updateEmailById(id:string, email:string): Observable<Email>{
    return this.http.put<Email>(
      `${this.endPoint}/users/email/${id}`,
      {email}
    );
  }

  //!!!! NOPE !!!!
  updateNameById(id:string, first_name:string, last_name:string): Observable<Name>{
    return this.http.put<Name>(
      `${this.endPoint}/users/name/${id}`,
      {first_name, last_name}
    )
  }

  //!!!! NOPE !!!!
  updatePasswordById(id:string, password:string){
    // this.http.put(
    //   `${this.endPoint}/users/${id}`,
    //   {password}
    // );
  }

  //!!!! NOPE !!!!
  deleteAccountById(id:string){
    // this.http.delete(
    //   `${this.endPoint}/users/${id}`
    // );
  }

}
