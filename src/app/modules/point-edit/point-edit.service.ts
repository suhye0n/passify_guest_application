import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PointEditService {
  constructor(private http: HttpClient) {}

  getPoint(id: string): Observable<any> {
    return this.http.get(`/passes/${id}`);
  }

  updatePoint(point: any): Observable<any> {
    return this.http.put(`/passes/${point.id}`, point);
  }

  getTags(): Observable<any> {
    return this.http.get('/tags');
  }

  getTitles(): Observable<any> {
    return this.http.get('/titles');
  }
}
