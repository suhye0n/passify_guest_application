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
    path: 'coupons/edit/:id',
    loadComponent: () => import('./modules/coupon-edit/coupon-edit.component'),
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
  {
    path: 'cards/edit/:id',
    loadComponent: () => import('./modules/card-edit/card-edit.component'),
  },
  {
    path: 'cards/add',
    loadComponent: () => import('./modules/card-add/card-add.component'),
  },
  {
    path: 'cards/:id',
    loadComponent: () => import('./modules/card-detail/card-detail.component'),
  },
  {
    path: 'cards',
    loadComponent: () => import('./modules/card-list/card-list.component'),
  },
  {
    path: 'coupons',
    loadComponent: () => import('./modules/coupon-list/coupon-list.component'),
  },
  {
    path: 'points/edit/:id',
    loadComponent: () => import('./modules/point-edit/point-edit.component'),
  },
  {
    path: 'points/add',
    loadComponent: () => import('./modules/point-add/point-add.component'),
  },
  {
    path: 'points/:id',
    loadComponent: () =>
      import('./modules/point-detail/point-detail.component'),
  },
  {
    path: 'points',
    loadComponent: () => import('./modules/point-list/point-list.component'),
  },
  {
    path: 'memberships/edit/:id',
    loadComponent: () =>
      import('./modules/membership-edit/membership-edit.component'),
  },
  {
    path: 'memberships/add',
    loadComponent: () =>
      import('./modules/membership-add/membership-add.component'),
  },
  {
    path: 'memberships/:id',
    loadComponent: () =>
      import('./modules/membership-detail/membership-detail.component'),
  },
  {
    path: 'memberships',
    loadComponent: () =>
      import('./modules/membership-list/membership-list.component'),
  },
];
