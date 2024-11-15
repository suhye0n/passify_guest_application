import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PointEditService } from './point-edit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import { Location } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-point-edit',
  templateUrl: './point-edit.component.html',
  styleUrls: ['./point-edit.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingIndicatorComponent,
    ErrorPopupComponent,
  ],
})
export default class PointEditComponent implements OnInit {
  point = {
    id: 0,
    barcode: '',
    memo: '',
    tagId: 0,
    titleId: 0,
  };
  pointId: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  tags: any[] = [];
  titles: any[] = [];

  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef;

  constructor(
    private pointEditService: PointEditService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.pointId = params.get('id') || '';
      this.getPointDetails(this.pointId);
    });

    this.loadTagsAndTitles();
  }

  getPointDetails(id: string): void {
    this.isLoading = true;
    this.pointEditService.getPoint(id).subscribe(
      (response: any) => {
        this.point = response.data;
        this.generateBarcode(this.point.barcode);
        this.isLoading = false;
      },
      (error) => {
        console.error('포인트 정보 불러오기 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '포인트 정보를 불러오지 못했습니다.';
      }
    );
  }

  loadTagsAndTitles(): void {
    this.pointEditService.getTags().subscribe(
      (response: any) => {
        this.tags = response.data;
      },
      (error) => {
        console.error('태그 불러오기 실패:', error);
        this.errorMessage = '태그 정보를 불러오지 못했습니다.';
      }
    );

    this.pointEditService.getTitles().subscribe(
      (response: any) => {
        this.titles = response.data;
      },
      (error) => {
        console.error('포인트명 불러오기 실패:', error);
        this.errorMessage = '포인트명 정보를 불러오지 못했습니다.';
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;
    this.pointEditService.updatePoint(this.point).subscribe(
      (response) => {
        this.router.navigate([`/points/${this.pointId}`]);
        this.isLoading = false;
      },
      (error) => {
        console.error('포인트 수정 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '포인트 수정에 실패했습니다.';
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
