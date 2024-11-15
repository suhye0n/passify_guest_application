import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MembershipAddService } from './membership-add.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import { Location } from '@angular/common';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-membership-add',
  templateUrl: './membership-add.component.html',
  styleUrls: ['./membership-add.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingIndicatorComponent,
    ErrorPopupComponent,
  ],
})
export default class MembershipAddComponent implements OnInit {
  membership = {
    userId: 0,
    titleId: null,
    tagId: null,
    barcode: '',
    memo: '',
    type: 'MEMBERSHIP',
  };
  isLoading: boolean = false;
  errorMessage: string = '';
  titles: any[] = [];
  tags: any[] = [];

  @ViewChild('barcodeSvg', { static: false }) barcodeSvgElement!: ElementRef;

  constructor(
    private membershipAddService: MembershipAddService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.membership.userId = Number(localStorage.getItem('userId'));
    this.fetchTitles();
    this.fetchTags();
  }

  fetchTitles(): void {
    this.membershipAddService.getTitles().subscribe(
      (response) => {
        this.titles = response.data;
        if (this.titles.length > 0) {
          this.membership.titleId = this.titles[0].id;
        }
      },
      (error) => {
        this.errorMessage = '멤버십명 정보를 불러오지 못했습니다.';
        console.log(error);
      }
    );
  }

  fetchTags(): void {
    this.membershipAddService.getTags().subscribe(
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

    this.membershipAddService.addMembership(this.membership).subscribe(
      (response) => {
        this.isLoading = false;
        this.router.navigate(['/memberships']);
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = '멤버십 추가 실패: ' + error.message;
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
