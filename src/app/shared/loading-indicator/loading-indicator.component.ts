import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LoadingIndicatorComponent implements OnChanges {
  @Input() isLoading: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLoading']) {
      if (this.isLoading) {
        document.body.style.overflow = 'hidden'; // 로딩 중 스크롤 방지
      } else {
        document.body.style.overflow = ''; // 로딩이 끝나면 스크롤 허용
      }
    }
  }
}
