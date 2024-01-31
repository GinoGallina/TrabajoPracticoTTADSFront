import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_URL = 'http://localhost:1234';

  constructor(public auth: AuthService, private http: HttpClient) {}

  login(user: Login) {
    return this.http.post(`${this.API_URL}/login`, user);
  }


  logout() {
    this.auth.logout();
  }
  getToken() {
    this.auth.idTokenClaims$.subscribe((claims) => {
      console.log('hola');
      if (claims) {
        console.log('User Profile:', claims);
      }
    });
  }
}
