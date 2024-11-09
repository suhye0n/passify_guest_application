import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponAddService {
  constructor(private http: HttpClient) {}

  addCoupon(coupon: any): Observable<any> {
    return this.http.post('/coupons', coupon);
  }
}
