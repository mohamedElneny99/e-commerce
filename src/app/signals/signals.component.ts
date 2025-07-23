import { Component, signal, computed, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  showCount = signal(false);
  count: WritableSignal<number> = signal(0);
  message: WritableSignal<string[]> = signal<string[]>([]);


  // قيمة مشتقة بناءً على showCount و count
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });

  // دالة زيادة العدد
  increment() {
    this.count.update(n => n + 1);
  }

  // دالة إنقاص العدد
  decrement() {
    this.count.update(n => n - 1);
  }

  // تبديل عرض العدد
  toggleShowCount() {
    this.showCount.set(!this.showCount());
  }

  


}
