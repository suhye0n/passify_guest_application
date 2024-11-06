import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  DestroyRef,
  inject,
} from '@angular/core';
import { UserService } from './services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[ifAuthenticated]',
  standalone: true,
})
export class AuthenticatedDirective implements OnInit {
  private condition: boolean = false;
  private hasView = false;

  private destroyRef = inject(DestroyRef);

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) {}

  @Input() set ifAuthenticated(condition: boolean) {
    this.condition = condition;
    this.updateView();
  }

  ngOnInit(): void {
    this.userService.isAuthenticated
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isAuthenticated: boolean) => {
        this.updateView(isAuthenticated);
      });
  }

  private updateView(isAuthenticated?: boolean): void {
    const shouldDisplay =
      (isAuthenticated && this.condition) ||
      (!isAuthenticated && !this.condition);

    if (shouldDisplay && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!shouldDisplay && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
