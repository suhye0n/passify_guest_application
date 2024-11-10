import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CouponAddService } from './coupon-add.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coupon-add',
  templateUrl: './coupon-add.component.html',
  styleUrls: ['./coupon-add.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export default class CouponAddComponent implements OnInit {
  coupon = {
    userId: 0,
    name: '',
    barcode: '',
    memo: '',
  };

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
    this.couponAddService.addCoupon(this.coupon).subscribe(
      (response) => {
        this.router.navigate(['/coupons']);
      },
      (error) => {
        console.error('쿠폰 추가 실패:', error);
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
}
