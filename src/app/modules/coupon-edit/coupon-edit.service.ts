import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponEditService {
  constructor(private http: HttpClient) {}

  getCoupon(id: string): Observable<any> {
    return this.http.get(`/passes/${id}`);
  }

  updateCoupon(coupon: any): Observable<any> {
    return this.http.put(`/passes/${coupon.id}`, coupon);
  }

  getTags(): Observable<any> {
    return this.http.get('/tags');
  }

  getTitles(): Observable<any> {
    return this.http.get('/titles');
  }
}
