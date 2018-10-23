import {Injectable} from '@angular/core';

const TOKEN = 'TOKEN';
const EMAIL = 'EMAIL';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  setName(email: string): void {
    localStorage.setItem(EMAIL, email);
  }

  getName(): string {
    return localStorage.getItem(EMAIL);
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) == '1';
  }
}
