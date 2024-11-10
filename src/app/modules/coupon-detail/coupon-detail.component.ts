import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponDetailService } from './coupon-detail.service';
import JsBarcode from 'jsbarcode';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-coupon-detail',
  templateUrl: './coupon-detail.component.html',
  styleUrls: ['./coupon-detail.component.css'],
  imports: [CommonModule, LoadingIndicatorComponent, ErrorPopupComponent],
  standalone: true,
})
export default class CouponDetailComponent implements OnInit, AfterViewInit {
  coupon: any;
  errorMessage: string = '';
  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef;
  private isViewInitialized = false;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private couponDetailService: CouponDetailService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const couponId = +this.route.snapshot.paramMap.get('id')!;
    this.loadCoupon(couponId);
  }

  ngAfterViewInit(): void {
    this.isViewInitialized = true;
    this.cdr.detectChanges();
  }

  loadCoupon(couponId: number): void {
    this.isLoading = true;
    this.couponDetailService.getCouponById(couponId).subscribe(
      (response: any) => {
        this.coupon = response.data;

        if (this.isViewInitialized && this.coupon?.barcode) {
          this.cdr.detectChanges();
          this.generateBarcode(String(this.coupon.barcode));
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('쿠폰 불러오기 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '쿠폰 불러오기 실패: ' + error.message;
      }
    );
  }

  generateBarcode(barcodeValue: string): void {
    if (this.barcodeElement?.nativeElement) {
      JsBarcode(this.barcodeElement.nativeElement, barcodeValue, {
        format: 'CODE128',
        width: 2,
        height: 50,
        displayValue: true,
      });
    }
  }

  goToEditPage(): void {
    this.router.navigate([`/coupons/edit/${this.coupon.id}`]);
  }

  closeErrorPopup(): void {
    this.errorMessage = '';
  }
}
