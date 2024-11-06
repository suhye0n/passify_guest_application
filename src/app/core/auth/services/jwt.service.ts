import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private static readonly TOKEN_KEY = 'token';

  getToken(): string {
    return localStorage.getItem(JwtService.TOKEN_KEY) || '';
  }

  saveToken(token: string): void {
    localStorage.setItem(JwtService.TOKEN_KEY, token);
  }

  destroyToken(): void {
    localStorage.removeItem(JwtService.TOKEN_KEY);
  }
}
