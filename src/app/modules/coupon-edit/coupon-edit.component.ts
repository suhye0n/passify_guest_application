import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CouponEditService } from './coupon-edit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-coupon-edit',
  templateUrl: './coupon-edit.component.html',
  styleUrls: ['./coupon-edit.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export default class CouponEditComponent implements OnInit {
  coupon = {
    userId: 0,
    name: '',
    barcode: '',
    memo: '',
  };
  couponId: string = '';

  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef;

  constructor(
    private couponEditService: CouponEditService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.couponId = params.get('id') || '';
      this.getCouponDetails(this.couponId);
    });

    this.coupon.userId = Number(localStorage.getItem('userId'));
  }

  getCouponDetails(id: string): void {
    this.couponEditService.getCoupon(id).subscribe(
      (response: any) => {
        this.coupon = response.data;
        this.generateBarcode(this.coupon.barcode);
      },
      (error) => {
        console.error('쿠폰 정보 불러오기 실패:', error);
      }
    );
  }

  onSubmit(): void {
    this.couponEditService.updateCoupon(this.coupon).subscribe(
      (response) => {
        this.router.navigate([`/coupons/${this.couponId}`]);
      },
      (error) => {
        console.error('쿠폰 수정 실패:', error);
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
}
