import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/auth/services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthenticatedDirective } from '../../core/auth/authenticated.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, AuthenticatedDirective],
  standalone: true,
})
export default class HomeComponent implements OnInit {
  isAuthenticated = false;
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.isAuthenticated
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
