import { Component, inject } from '@angular/core';
import { UserService } from '../auth/services/user.service';
import { AuthenticatedDirective } from '../auth/authenticated.directive';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [AuthenticatedDirective, AsyncPipe],
  standalone: true,
})
export class HeaderComponent {
  currentUser$ = inject(UserService).currentUser$;
  private userService = inject(UserService);
  private router = inject(Router);

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
}
