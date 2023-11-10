import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  API_URL = 'http://localhost:1234';

  constructor(private http: HttpClient) {}
  getCart(filter: string) {
    const params = new HttpParams().set('state', filter);

    return this.http.get(`${this.API_URL}/cart/`, { params });
  }
}
