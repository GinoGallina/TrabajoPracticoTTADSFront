import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  API_URL = 'http://localhost:1234';
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.API_URL}/category`);
  }
  getOneCategory(id: String) {
    return this.http.get(`${this.API_URL}/category/${id}`);
  }
  createCategory(data: any) {
    return this.http.post(`${this.API_URL}/category`, data);
  }
  editCategory(id: String, data: any) {
    return this.http.put(`${this.API_URL}/category/${id}`, data);
  }
  deleteCategory(id: String) {
    return this.http.delete(`${this.API_URL}/category/${id}`);
  }
}
