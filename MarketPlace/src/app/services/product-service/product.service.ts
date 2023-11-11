import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = 'http://localhost:1234';
  constructor(private http: HttpClient) {}

  getProducts(seller: string) {
    const params = new HttpParams().set('seller', seller);
    return this.http.get(`${this.API_URL}/products`, { params });
  }
  getAllProducts() {
    return this.http.get(`${this.API_URL}/products`);
  }
  getOneProduct(id: String) {
    return this.http.get(`${this.API_URL}/products/${id}`);
  }
  createProduct(data: any) {
    return this.http.post(`${this.API_URL}/products`, data);
  }
  editProduct(id: String, data: any) {
    return this.http.put(`${this.API_URL}/products/${id}`, data);
  }
  deleteProduct(id: String) {
    return this.http.delete(`${this.API_URL}/products/${id}`);
  }
}
