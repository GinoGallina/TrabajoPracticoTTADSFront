import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  API_URL = 'http://localhost:1234';
  constructor(private http: HttpClient) {}

  getReviews() {
    return this.http.get(`${this.API_URL}/review`);
  }
  createReview(data: any) {
    return this.http.post(`${this.API_URL}/review`, data);
  }
  editReview(id: String, data: any) {
    return this.http.put(`${this.API_URL}/review/${id}`, data);
  }
  deleteReview(id: String) {
    return this.http.delete(`${this.API_URL}/review/${id}`);
  }
}
