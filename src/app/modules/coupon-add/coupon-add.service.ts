import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponAddService {
  constructor(private http: HttpClient) {}

  getTitles(): Observable<any> {
    return this.http.get<any>('/titles');
  }

  getTags(): Observable<any> {
    return this.http.get<any>('/tags');
  }

  addCoupon(coupon: any): Observable<any> {
    const payload = {
      titleId: Number(coupon.titleId),
      barcode: coupon.barcode,
      memo: coupon.memo,
      tagId: coupon.tagId === null ? null : Number(coupon.tagId),
      type: coupon.type,
    };
    return this.http.post('/passes', payload);
  }
}
