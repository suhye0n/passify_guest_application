import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershipDetailService } from './membership-detail.service';
import JsBarcode from 'jsbarcode';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-membership-detail',
  templateUrl: './membership-detail.component.html',
  styleUrls: ['./membership-detail.component.css'],
  imports: [CommonModule, LoadingIndicatorComponent, ErrorPopupComponent],
  standalone: true,
})
export default class MembershipDetailComponent
  implements OnInit, AfterViewInit
{
  membership: any;
  errorMessage: string = '';
  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef;
  private isViewInitialized = false;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private membershipDetailService: MembershipDetailService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const membershipId = +this.route.snapshot.paramMap.get('id')!;
    this.loadMembership(membershipId);
  }

  ngAfterViewInit(): void {
    this.isViewInitialized = true;
    this.cdr.detectChanges();
  }

  loadMembership(membershipId: number): void {
    this.isLoading = true;
    this.membershipDetailService.getMembershipById(membershipId).subscribe(
      (response: any) => {
        this.membership = response.data;

        if (this.isViewInitialized && this.membership?.barcode) {
          this.cdr.detectChanges();
          this.generateBarcode(String(this.membership.barcode));
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('멤버십 불러오기 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '멤버십 불러오기 실패: ' + error.message;
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
    this.router.navigate([`/memberships/edit/${this.membership.id}`]);
  }

  closeErrorPopup(): void {
    this.errorMessage = '';
  }
}
