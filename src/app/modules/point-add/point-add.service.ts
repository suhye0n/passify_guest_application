import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PointAddService {
  constructor(private http: HttpClient) {}

  getTitles(): Observable<any> {
    return this.http.get<any>('/titles');
  }

  getTags(): Observable<any> {
    return this.http.get<any>('/tags');
  }

  addPoint(point: any): Observable<any> {
    const payload = {
      titleId: Number(point.titleId),
      barcode: point.barcode,
      memo: point.memo,
      tagId: point.tagId === null ? null : Number(point.tagId),
      type: point.type,
    };
    return this.http.post('/passes', payload);
  }
}
