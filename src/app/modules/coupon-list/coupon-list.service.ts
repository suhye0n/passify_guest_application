import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponListService {
  constructor(private http: HttpClient) {}

  getCoupons(
    offset: number = 0,
    limit: number = 10,
    searchBy: string = 'name',
    searchQuery: string = ''
  ): Observable<any> {
    let params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    if (searchQuery) {
      params = params.set(searchBy, searchQuery);
    }

    return this.http.get('/coupons', { params });
  }
}
