import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardDetailService } from './card-detail.service';
import JsBarcode from 'jsbarcode';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  imports: [CommonModule, LoadingIndicatorComponent, ErrorPopupComponent],
  standalone: true,
})
export default class CardDetailComponent implements OnInit, AfterViewInit {
  card: any;
  errorMessage: string = '';
  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef;
  private isViewInitialized = false;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cardDetailService: CardDetailService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const cardId = +this.route.snapshot.paramMap.get('id')!;
    this.loadCard(cardId);
  }

  ngAfterViewInit(): void {
    this.isViewInitialized = true;
    this.cdr.detectChanges();
  }

  loadCard(cardId: number): void {
    this.isLoading = true;
    this.cardDetailService.getCardById(cardId).subscribe(
      (response: any) => {
        this.card = response.data;

        if (this.isViewInitialized && this.card?.barcode) {
          this.cdr.detectChanges();
          this.generateBarcode(String(this.card.barcode));
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('카드 불러오기 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '카드 불러오기 실패: ' + error.message;
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
    this.router.navigate([`/cards/edit/${this.card.id}`]);
  }

  closeErrorPopup(): void {
    this.errorMessage = '';
  }
}
