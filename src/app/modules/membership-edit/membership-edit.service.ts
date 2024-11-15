import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembershipEditService {
  constructor(private http: HttpClient) {}

  getMembership(id: string): Observable<any> {
    return this.http.get(`/passes/${id}`);
  }

  updateMembership(membership: any): Observable<any> {
    return this.http.put(`/passes/${membership.id}`, membership);
  }

  getTags(): Observable<any> {
    return this.http.get('/tags');
  }

  getTitles(): Observable<any> {
    return this.http.get('/titles');
  }
}
