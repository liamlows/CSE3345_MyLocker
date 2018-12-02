import {Injectable} from '@angular/core';

const TOKEN = 'TOKEN';

const ID = 'UID';
const FIRST_NAME = 'FIRST_NAME';
const LAST_NAME = 'LAST_NAME';
const EMAIL = 'EMAIL';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setUser(id: string, fname: string, lname: string, email: string):void{
    localStorage.setItem(TOKEN, '1');
    localStorage.setItem(ID, id);
    localStorage.setItem(FIRST_NAME, fname);
    localStorage.setItem(LAST_NAME, lname);
    localStorage.setItem(EMAIL, email);
  }

  setName(firstName: string, lastName: string): void {
    localStorage.setItem(FIRST_NAME, firstName);
    localStorage.setItem(LAST_NAME, lastName);
  }

  setEmail(email: string): void {
    localStorage.setItem(EMAIL, email);
  }

  removeUser(): void {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(ID);
    localStorage.removeItem(FIRST_NAME);
    localStorage.removeItem(LAST_NAME);
    localStorage.removeItem(EMAIL);
  }

  getFirstName(): string {
    return localStorage.getItem(FIRST_NAME);
  }

  getLastName(): string {
    return localStorage.getItem(LAST_NAME);
  }

  getEmail(): string {
    return localStorage.getItem(EMAIL);
  }

  getId(): string {
    return localStorage.getItem(ID);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) == '1';
  }
}
