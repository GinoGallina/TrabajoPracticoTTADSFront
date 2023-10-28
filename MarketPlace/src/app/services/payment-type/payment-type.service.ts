import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  API_URL = 'http://localhost:1234';
  constructor(private http: HttpClient) {
  }

  getPaymentTypes() {
    return this.http.get(`${this.API_URL}/payment_type`);
  }
  getOnePaymentType(id: Number) {
    return this.http.get(`${this.API_URL}/payment_type/${id}`);
  }
  createPaymentType(data: any) {
    return this.http.post(`${this.API_URL}/payment_type`, data);
  }
  editPaymentType(id: Number, data: any) {
    return this.http.patch(`${this.API_URL}/payment_type/${id}`, data);
  }
  deletePaymentType(id: String) {
    return this.http.delete(`${this.API_URL}/payment_type/${id}`)
  }
}
