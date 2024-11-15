import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardDetailService {
  constructor(private http: HttpClient) {}

  getCardById(id: number): Observable<any> {
    return this.http.get(`/passes/${id}`);
  }
}
