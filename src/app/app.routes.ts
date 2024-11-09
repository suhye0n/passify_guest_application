import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './core/auth/services/user.service';
import { map } from 'rxjs/operators';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/home.component'),
  },
  {
    path: 'login',
    loadComponent: () => import('./core/auth/auth.component'),
    canActivate: [
      () => inject(UserService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
    ],
  },
  {
    path: 'signup',
    loadComponent: () => import('./core/auth/auth.component'),
    canActivate: [
      () => inject(UserService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
    ],
  },
  {
    path: 'coupons/add',
    loadComponent: () => import('./modules/coupon-add/coupon-add.component'),
  },
  {
    path: 'coupons/:id',
    loadComponent: () =>
      import('./modules/coupon-detail/coupon-detail.component'),
  },
  {
    path: 'coupons',
    loadComponent: () => import('./modules/coupon-list/coupon-list.component'),
  },
];
