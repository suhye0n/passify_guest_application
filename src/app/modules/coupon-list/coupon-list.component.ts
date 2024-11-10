import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/auth/services/user.service';
import { CouponListService } from './coupon-list.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthenticatedDirective } from '../../core/auth/authenticated.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css'],
  imports: [CommonModule, AuthenticatedDirective, FormsModule],
  standalone: true,
})
export default class CouponListComponent implements OnInit {
  isAuthenticated = false;
  coupons: any[] = [];
  destroyRef = inject(DestroyRef);
  offset = 0;
  limit = 10;
  count = 0;
  currentPage = 1;
  totalPages: number[] = [];
  searchBy: string = 'name'; // 검색 기준
  searchQuery: string = ''; // 검색어

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly couponListService: CouponListService
  ) {}

  ngOnInit(): void {
    this.userService.isAuthenticated
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
      });

    this.loadCoupons();
  }

  loadCoupons(): void {
    this.couponListService
      .getCoupons(this.offset, this.limit, this.searchBy, this.searchQuery)
      .subscribe((response: any) => {
        this.coupons = response.data;
        this.count = response.count;
        this.totalPages = Array(Math.ceil(this.count / this.limit))
          .fill(0)
          .map((_, i) => i + 1);
      });
  }

  searchCoupons(): void {
    this.currentPage = 1;
    this.offset = 0;
    this.loadCoupons();
  }

  goToDetail(couponId: number): void {
    this.router.navigate([`/coupons`, couponId]);
  }

  goToAddCoupon(): void {
    this.router.navigate(['/coupons/add']);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.offset = (page - 1) * this.limit;
    this.loadCoupons();
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages.length) {
      this.goToPage(this.currentPage + 1);
    }
  }
}
