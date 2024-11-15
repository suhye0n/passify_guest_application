import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PointDetailService } from './point-detail.service';
import JsBarcode from 'jsbarcode';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-point-detail',
  templateUrl: './point-detail.component.html',
  styleUrls: ['./point-detail.component.css'],
  imports: [CommonModule, LoadingIndicatorComponent, ErrorPopupComponent],
  standalone: true,
})
export default class PointDetailComponent implements OnInit, AfterViewInit {
  point: any;
  errorMessage: string = '';
  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef;
  private isViewInitialized = false;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private pointDetailService: PointDetailService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const pointId = +this.route.snapshot.paramMap.get('id')!;
    this.loadPoint(pointId);
  }

  ngAfterViewInit(): void {
    this.isViewInitialized = true;
    this.cdr.detectChanges();
  }

  loadPoint(pointId: number): void {
    this.isLoading = true;
    this.pointDetailService.getPointById(pointId).subscribe(
      (response: any) => {
        this.point = response.data;

        if (this.isViewInitialized && this.point?.barcode) {
          this.cdr.detectChanges();
          this.generateBarcode(String(this.point.barcode));
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('포인트 불러오기 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '포인트 불러오기 실패: ' + error.message;
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
    this.router.navigate([`/points/edit/${this.point.id}`]);
  }

  closeErrorPopup(): void {
    this.errorMessage = '';
  }
}
