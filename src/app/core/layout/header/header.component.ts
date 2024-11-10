import { Component, inject } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { AuthenticatedDirective } from '../../auth/authenticated.directive';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from '../../../shared/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    AuthenticatedDirective,
    AsyncPipe,
    CommonModule,
    LoadingIndicatorComponent,
  ],
  standalone: true,
})
export class HeaderComponent {
  currentUser$ = inject(UserService).currentUser$;
  private userService = inject(UserService);
  private router = inject(Router);

  isSidebarActive = false;
  menuClass = 'close';
  isLoading: boolean = false;

  logout(): void {
    this.isLoading = true;
    this.userService.logout();
    this.isLoading = false;
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToCoupon(): void {
    this.router.navigate(['/coupons']);
  }

  goToCard(): void {
    this.router.navigate(['/cards']);
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
    this.menuClass = this.isSidebarActive ? 'open' : '';
  }
}
