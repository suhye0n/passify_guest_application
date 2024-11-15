import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CardAddService } from './card-add.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import { Location } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingIndicatorComponent,
    ErrorPopupComponent,
  ],
})
export default class CardAddComponent implements OnInit {
  card = {
    userId: 0,
    titleId: null,
    tagId: null,
    barcode: '',
    memo: '',
    type: 'CARD',
  };
  isLoading: boolean = false;
  errorMessage: string = '';
  titles: any[] = [];
  tags: any[] = [];

  @ViewChild('barcodeSvg', { static: false }) barcodeSvgElement!: ElementRef;

  constructor(
    private cardAddService: CardAddService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.card.userId = Number(localStorage.getItem('userId'));
    this.fetchTitles();
    this.fetchTags();
  }

  fetchTitles(): void {
    this.cardAddService.getTitles().subscribe(
      (response) => {
        this.titles = response.data;
        if (this.titles.length > 0) {
          this.card.titleId = this.titles[0].id;
        }
      },
      (error) => {
        this.errorMessage = '카드명 정보를 불러오지 못했습니다.';
        console.log(error);
      }
    );
  }

  fetchTags(): void {
    this.cardAddService.getTags().subscribe(
      (response) => {
        this.tags = response.data;
      },
      (error) => {
        this.errorMessage = '태그 정보를 불러오지 못했습니다.';
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;

    this.cardAddService.addCard(this.card).subscribe(
      (response) => {
        this.isLoading = false;
        this.router.navigate(['/cards']);
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = '카드 추가 실패: ' + error.message;
      }
    );
  }

  generateBarcode(barcodeValue: string): void {
    if (barcodeValue && this.barcodeSvgElement?.nativeElement) {
      JsBarcode(this.barcodeSvgElement.nativeElement, barcodeValue, {
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
