import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardAddService {
  constructor(private http: HttpClient) {}

  getTitles(): Observable<any> {
    return this.http.get<any>('/titles');
  }

  getTags(): Observable<any> {
    return this.http.get<any>('/tags');
  }

  addCard(card: any): Observable<any> {
    const payload = {
      titleId: Number(card.titleId),
      barcode: card.barcode,
      memo: card.memo,
      tagId: card.tagId === null ? null : Number(card.tagId),
      type: card.type,
    };
    return this.http.post('/passes', payload);
  }
}
