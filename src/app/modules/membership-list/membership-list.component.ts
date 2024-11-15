import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/auth/services/user.service';
import { MembershipListService } from './membership-list.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthenticatedDirective } from '../../core/auth/authenticated.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../core/layout/footer/footer.component';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator.component';
import { ErrorPopupComponent } from '../../shared/error-popup/error-popup.component';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.css'],
  imports: [
    CommonModule,
    AuthenticatedDirective,
    FormsModule,
    FooterComponent,
    LoadingIndicatorComponent,
    ErrorPopupComponent,
  ],
  standalone: true,
})
export default class MembershipListComponent implements OnInit {
  isAuthenticated = false;
  memberships: any[] = [];
  destroyRef = inject(DestroyRef);
  offset = 0;
  limit = 10;
  count = 0;
  currentPage = 1;
  totalPages: number[] = [];
  searchBy: string = 'name'; // 검색 기준
  searchQuery: string = ''; // 검색어
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly membershipListService: MembershipListService
  ) {}

  ngOnInit(): void {
    this.userService.isAuthenticated
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
      });

    this.loadMemberships();
  }

  loadMemberships(): void {
    this.isLoading = true;
    this.membershipListService
      .getMemberships(this.offset, this.limit, this.searchBy, this.searchQuery)
      .subscribe(
        (response: any) => {
          this.memberships = response.data;
          this.count = response.count;
          this.totalPages = Array(Math.ceil(this.count / this.limit))
            .fill(0)
            .map((_, i) => i + 1);
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false; // 에러 발생 시 로딩 종료
          this.errorMessage = '멤버십 목록 불러오기 실패: ' + error.message;
          console.error('멤버십 목록 불러오기 실패:', error);
        }
      );
  }

  searchMemberships(): void {
    this.currentPage = 1;
    this.offset = 0;
    this.loadMemberships();
  }

  goToDetail(membershipId: number): void {
    this.router.navigate([`/memberships`, membershipId]);
  }

  goToAddMembership(): void {
    this.router.navigate(['/memberships/add']);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.offset = (page - 1) * this.limit;
    this.loadMemberships();
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages.length) {
      this.goToPage(this.currentPage + 1);
    }
  }

  pagesToDisplay(): number[] {
    const start = Math.floor((this.currentPage - 1) / 5) * 5 + 1;
    const end = Math.min(start + 4, this.totalPages.length);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  closeErrorPopup(): void {
    this.errorMessage = '';
  }
}
