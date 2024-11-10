import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponListService {
  constructor(private http: HttpClient) {}

  getCoupons(offset: number = 0, limit: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());
    return this.http.get('/coupons', { params });
  }
}
