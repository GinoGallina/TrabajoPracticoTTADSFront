import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_URL = 'http://localhost:1234';

  constructor(private http: HttpClient) {}

  login(user: Login) {
    return this.http.post(`${this.API_URL}/login`, user);
  }
}
