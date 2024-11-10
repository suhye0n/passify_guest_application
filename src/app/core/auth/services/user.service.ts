import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  map,
  tap,
  distinctUntilChanged,
  shareReplay,
  concatMap,
} from 'rxjs/operators';
import { JwtService } from './jwt.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());
  public isAuthenticated = this.currentUser$.pipe(map((user) => !!user));

  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router
  ) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>('/login', credentials).pipe(
      tap((response) => {
        this.setAuth(response.data);
      })
    );
  }

  signup(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>('/signup', credentials).pipe(
      concatMap((response) => {
        return this.login({
          email: credentials.email,
          password: credentials.password,
        });
      })
    );
  }

  logout(): void {
    this.http.post('/logout', {}).subscribe();
    this.purgeAuth();
  }

  getCurrentUser(): Observable<{ user: User }> {
    const userId = localStorage.getItem('userId');

    return this.http.get<{ data: User }>(`/users/${userId}`).pipe(
      map((response) => ({ user: response.data })),
      tap({
        next: ({ user }) => this.setAuth(user),
        error: () => this.purgeAuth(),
      }),
      shareReplay(1)
    );
  }

  update(user: Partial<User>): Observable<{ user: User }> {
    return this.http
      .put<{ user: User }>('/users', { user })
      .pipe(tap(({ user }) => this.currentUserSubject.next(user)));
  }

  private setAuth(user: User): void {
    localStorage.setItem('userId', user.id);
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
  }

  private purgeAuth(): void {
    localStorage.clear();
    this.jwtService.destroyToken();
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
