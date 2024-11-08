import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/auth/services/user.service';
import { CouponService } from './coupon.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthenticatedDirective } from '../../../core/auth/authenticated.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
  imports: [CommonModule, AuthenticatedDirective],
  standalone: true,
})
export default class HomeComponent implements OnInit {
  isAuthenticated = false;
  coupons: any[] = [];
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly couponService: CouponService
  ) {}

  ngOnInit(): void {
    this.userService.isAuthenticated
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
      });

    this.couponService.getCoupons().subscribe((response: any) => {
      this.coupons = response.data;
    });
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  goToDetail(couponId: number): void {
    // this.router.navigate([`/coupons`, couponId]);
  }
}
