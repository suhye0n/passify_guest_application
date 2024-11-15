import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembershipDetailService {
  constructor(private http: HttpClient) {}

  getMembershipById(id: number): Observable<any> {
    return this.http.get(`/passes/${id}`);
  }
}
