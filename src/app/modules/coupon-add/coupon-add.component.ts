import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CouponAddService } from './coupon-add.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import { Location } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-coupon-add',
  templateUrl: './coupon-add.component.html',
  styleUrls: ['./coupon-add.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingIndicatorComponent,
    ErrorPopupComponent,
  ],
})
export default class CouponAddComponent implements OnInit {
  coupon = {
    userId: 0,
    name: '',
    barcode: '',
    memo: '',
  };
  isLoading: boolean = false;
  errorMessage: string = '';

  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef;

  constructor(
    private couponAddService: CouponAddService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.coupon.userId = Number(localStorage.getItem('userId'));
  }

  onSubmit(): void {
    this.isLoading = true;
    this.couponAddService.addCoupon(this.coupon).subscribe(
      (response) => {
        this.isLoading = false;
        this.router.navigate(['/coupons']);
      },
      (error) => {
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '쿠폰 추가 실패: ' + error.message;
      }
    );
  }

  generateBarcode(barcodeValue: string): void {
    if (this.barcodeElement?.nativeElement && barcodeValue) {
      JsBarcode(this.barcodeElement.nativeElement, barcodeValue, {
        format: 'CODE128',
        width: 2,
        height: 50,
        displayValue: true,
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  closeErrorPopup(): void {
    this.errorMessage = '';
  }
}
