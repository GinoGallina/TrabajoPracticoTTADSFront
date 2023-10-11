import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  API_URL = 'http://localhost:1234';
  constructor(private http: HttpClient) {}

  getDiscounts() {
    return this.http.get(`${this.API_URL}/discount`);
  }
  getOneDiscount(id: Number) {
    return this.http.get(`${this.API_URL}/discount/${id}`);
  }
  createDiscount(data: any) {
    return this.http.post(`${this.API_URL}/discount`, data);
  }
  editDiscount(id: Number, data: any) {
    return this.http.patch(`${this.API_URL}/discount/${id}`, data);
  }
  deleteDiscount(id: Number) {
    return this.http.delete(`${this.API_URL}/discount/${id}`);
  }
}
