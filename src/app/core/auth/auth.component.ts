import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from './services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ValidationErrors } from '../models/errors.model';

interface AuthFormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
})
export default class AuthComponent implements OnInit {
  public authType: string = '';
  public title: string = '';
  public isSubmitting: boolean = false;
  public errors: ValidationErrors = { detail: {} };
  public authForm: FormGroup;

  private readonly destroyRef = inject(DestroyRef);
  private readonly userService = inject(UserService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    this.authForm = this.createAuthForm();
  }

  ngOnInit(): void {
    this.initializeAuthType();

    this.authForm
      .get('password')
      ?.valueChanges.subscribe(() => this.checkPasswordMatch());
    this.authForm
      .get('passwordConfirmation')
      ?.valueChanges.subscribe(() => this.checkPasswordMatch());
  }

  private createAuthForm(): FormGroup {
    const form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirmation: new FormControl('', [Validators.required]),
    });

    return form;
  }

  private initializeAuthType(): void {
    this.authType = this.route.snapshot.url.at(-1)?.path || '';
    this.title = this.authType === 'login' ? '로그인' : '회원가입';
  }

  private checkPasswordMatch(): void {
    const password = this.authForm.get('password')?.value;
    const passwordConfirmation = this.authForm.get(
      'passwordConfirmation'
    )?.value;

    if (password && passwordConfirmation && password !== passwordConfirmation) {
      this.authForm
        .get('passwordConfirmation')
        ?.setErrors({ passwordMismatch: '비밀번호가 일치하지 않습니다.' });
    } else {
      this.authForm.get('passwordConfirmation')?.setErrors(null);
    }
  }

  public onSubmit(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.errors = { detail: {} };

    const formData = this.authForm.value as AuthFormValues;
    const request$ =
      this.authType === 'login'
        ? this.userService.login({
            email: formData.email,
            password: formData.password,
          })
        : this.userService.signup({
            email: formData.email,
            password: formData.password,
          });

    request$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        if (err && err.message) {
          const errorMessages: string[] = err.message
            .split(', ')
            .map((msg: string) => msg.trim());

          const errorObj: { [key: string]: string } = {};
          errorMessages.forEach((msg: string) => {
            errorObj[msg] = msg;
          });

          this.errors = { detail: errorObj };
        }
        this.isSubmitting = false;
      },
    });
  }

  public get errorEntries(): [string, string][] {
    return Object.entries(this.errors.detail);
  }
}
