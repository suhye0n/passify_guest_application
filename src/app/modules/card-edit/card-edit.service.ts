import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardEditService {
  constructor(private http: HttpClient) {}

  getCard(id: string): Observable<any> {
    return this.http.get(`/passes/${id}`);
  }

  updateCard(card: any): Observable<any> {
    return this.http.put(`/passes/${card.id}`, card);
  }

  getTags(): Observable<any> {
    return this.http.get('/tags');
  }

  getTitles(): Observable<any> {
    return this.http.get('/titles');
  }
}
