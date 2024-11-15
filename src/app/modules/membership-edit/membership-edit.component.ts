import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MembershipEditService } from './membership-edit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import { Location } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-membership-edit',
  templateUrl: './membership-edit.component.html',
  styleUrls: ['./membership-edit.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingIndicatorComponent,
    ErrorPopupComponent,
  ],
})
export default class MembershipEditComponent implements OnInit {
  membership = {
    id: 0,
    barcode: '',
    memo: '',
    tagId: 0,
    titleId: 0,
  };
  membershipId: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  tags: any[] = [];
  titles: any[] = [];

  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef;

  constructor(
    private membershipEditService: MembershipEditService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.membershipId = params.get('id') || '';
      this.getMembershipDetails(this.membershipId);
    });

    this.loadTagsAndTitles();
  }

  getMembershipDetails(id: string): void {
    this.isLoading = true;
    this.membershipEditService.getMembership(id).subscribe(
      (response: any) => {
        this.membership = response.data;
        this.generateBarcode(this.membership.barcode);
        this.isLoading = false;
      },
      (error) => {
        console.error('멤버십 정보 불러오기 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '멤버십 정보를 불러오지 못했습니다.';
      }
    );
  }

  loadTagsAndTitles(): void {
    this.membershipEditService.getTags().subscribe(
      (response: any) => {
        this.tags = response.data;
      },
      (error) => {
        console.error('태그 불러오기 실패:', error);
        this.errorMessage = '태그 정보를 불러오지 못했습니다.';
      }
    );

    this.membershipEditService.getTitles().subscribe(
      (response: any) => {
        this.titles = response.data;
      },
      (error) => {
        console.error('멤버십명 불러오기 실패:', error);
        this.errorMessage = '멤버십명 정보를 불러오지 못했습니다.';
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;
    this.membershipEditService.updateMembership(this.membership).subscribe(
      (response) => {
        this.router.navigate([`/memberships/${this.membershipId}`]);
        this.isLoading = false;
      },
      (error) => {
        console.error('멤버십 수정 실패:', error);
        this.isLoading = false; // 에러 발생 시 로딩 종료
        this.errorMessage = '멤버십 수정에 실패했습니다.';
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
