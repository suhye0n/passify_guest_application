import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponEditService {
  constructor(private http: HttpClient) {}

  getCoupon(id: string): Observable<any> {
    return this.http.get(`/coupons/${id}`);
  }

  updateCoupon(coupon: any): Observable<any> {
    return this.http.put(`/coupons/${coupon.id}`, coupon);
  }
}
