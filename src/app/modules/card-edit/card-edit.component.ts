import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CardEditService } from './card-edit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import { Location } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingIndicatorComponent,
    ErrorPopupComponent,
  ],
})
export default class CardEditComponent implements OnInit {
  card = {
    id: 0,
    barcode: '',
    memo: '',
    tagId: 0,
    titleId: 0,
  };
  cardId: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  tags: any[] = [];
  titles: any[] = [];

  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef;

  constructor(
    private cardEditService: CardEditService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cardId = params.get('id') || '';
      this.getCardDetails(this.cardId);
    });

    this.loadTagsAndTitles();
  }

  getCardDetails(id: string): void {
    this.isLoading = true;
    this.cardEditService.getCard(id).subscribe(
      (response: any) => {
        this.card = response.data;
        this.generateBarcode(this.card.barcode);
        this.isLoading = false;
      },
      (error) => {
        console.error('카드 정보 불러오기 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '카드 정보를 불러오지 못했습니다.';
      }
    );
  }

  loadTagsAndTitles(): void {
    this.cardEditService.getTags().subscribe(
      (response: any) => {
        this.tags = response.data;
      },
      (error) => {
        console.error('태그 불러오기 실패:', error);
        this.errorMessage = '태그 정보를 불러오지 못했습니다.';
      }
    );

    this.cardEditService.getTitles().subscribe(
      (response: any) => {
        this.titles = response.data;
      },
      (error) => {
        console.error('카드명 불러오기 실패:', error);
        this.errorMessage = '카드명 정보를 불러오지 못했습니다.';
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;
    this.cardEditService.updateCard(this.card).subscribe(
      (response) => {
        this.router.navigate([`/cards/${this.cardId}`]);
        this.isLoading = false;
      },
      (error) => {
        console.error('카드 수정 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '카드 수정에 실패했습니다.';
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
