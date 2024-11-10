import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ErrorPopupComponent implements OnChanges {
  @Input() errorMessage: string = '';
  @Output() close = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['errorMessage'] && this.errorMessage) {
      // 팝업이 열릴 때 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else if (!this.errorMessage) {
      // 팝업이 닫히면 스크롤 허용
      document.body.style.overflow = '';
    }
  }

  closePopup(): void {
    this.close.emit();
  }
}
