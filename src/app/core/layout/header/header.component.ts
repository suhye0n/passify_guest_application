import { Component, inject } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { AuthenticatedDirective } from '../../auth/authenticated.directive';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [AuthenticatedDirective, AsyncPipe, CommonModule],
  standalone: true,
})
export class HeaderComponent {
  currentUser$ = inject(UserService).currentUser$;
  private userService = inject(UserService);
  private router = inject(Router);

  isSidebarActive = false;
  menuClass = 'close';

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
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
