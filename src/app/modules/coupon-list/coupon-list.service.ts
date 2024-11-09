import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponListService {
  constructor(private http: HttpClient) {}

  getCoupons(): Observable<any> {
    return this.http.get('/coupons');
  }
}
