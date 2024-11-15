import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembershipAddService {
  constructor(private http: HttpClient) {}

  getTitles(): Observable<any> {
    return this.http.get<any>('/titles');
  }

  getTags(): Observable<any> {
    return this.http.get<any>('/tags');
  }

  addMembership(membership: any): Observable<any> {
    const payload = {
      titleId: Number(membership.titleId),
      barcode: membership.barcode,
      memo: membership.memo,
      tagId: membership.tagId === null ? null : Number(membership.tagId),
      type: membership.type,
    };
    return this.http.post('/passes', payload);
  }
}
