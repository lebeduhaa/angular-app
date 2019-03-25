import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollNext]'
})
export class ScrollNextDirective {

  @Output() scrollPrevEvent = new EventEmitter<boolean>();
  @Output() scrollNextEvent = new EventEmitter<boolean>();

  @HostListener('wheel', ['$event'])
  scrollHandler($event): void {
    const delta = Math.max(-1, Math.min(1, ($event.wheelDelta || -$event.detail)));

    console.log(delta);

    if (delta > 0) {
      this.scrollPrevEvent.emit(true);
    } else {
      this.scrollNextEvent.emit(true);
    }
  }

}