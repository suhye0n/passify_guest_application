import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CouponEditService } from './coupon-edit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import { Location } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-coupon-edit',
  templateUrl: './coupon-edit.component.html',
  styleUrls: ['./coupon-edit.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingIndicatorComponent,
    ErrorPopupComponent,
  ],
})
export default class CouponEditComponent implements OnInit {
  coupon = {
    userId: 0,
    name: '',
    barcode: '',
    memo: '',
  };
  couponId: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef;

  constructor(
    private couponEditService: CouponEditService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.couponId = params.get('id') || '';
      this.getCouponDetails(this.couponId);
    });

    this.coupon.userId = Number(localStorage.getItem('userId'));
  }

  getCouponDetails(id: string): void {
    this.isLoading = true;
    this.couponEditService.getCoupon(id).subscribe(
      (response: any) => {
        this.coupon = response.data;
        this.generateBarcode(this.coupon.barcode);
        this.isLoading = false;
      },
      (error) => {
        console.error('쿠폰 정보 불러오기 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '쿠폰 정보를 불러오지 못했습니다.';
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;
    this.couponEditService.updateCoupon(this.coupon).subscribe(
      (response) => {
        this.router.navigate([`/coupons/${this.couponId}`]);
        this.isLoading = false;
      },
      (error) => {
        console.error('쿠폰 수정 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '쿠폰 수정에 실패했습니다.';
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
