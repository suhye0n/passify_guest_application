import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PointDetailService {
  constructor(private http: HttpClient) {}

  getPointById(id: number): Observable<any> {
    return this.http.get(`/passes/${id}`);
  }
}
