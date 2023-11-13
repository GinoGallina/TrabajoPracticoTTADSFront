import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = 'http://localhost:1234';
  constructor(private http: HttpClient) {}

  getUsers(seller: string) {
    const params = new HttpParams().set('seller', seller);
    return this.http.get(`${this.API_URL}/user`, { params });
  }
  getAllUsers() {
    return this.http.get(`${this.API_URL}/user`);
  }
  getOneUser(id: String) {
    return this.http.get(`${this.API_URL}/user/${id}`);
  }
  createUser(data: any) {
    return this.http.post(`${this.API_URL}/user`, data);
  }
  editUser(id: String, data: any) {
    return this.http.put(`${this.API_URL}/user/${id}`, data);
  }
  deleteUser(id: String) {
    return this.http.delete(`${this.API_URL}/user/${id}`);
  }

  activateUser(id: String) {
    return this.http.put(`${this.API_URL}/user/activate/${id}`,null);
  }
}
