import { Directive, HostListener, Output, EventEmitter, ElementRef, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appSwipe]'
})
export class SwipeDirective implements OnInit {

  @Output() swipeRightEvent = new EventEmitter<boolean>();
  @Output() swipeLeftEvent = new EventEmitter<boolean>();

  @Input() disableRightSwipe: boolean;
  @Input() disableLeftSwipe: boolean;
  @Input() navigationSubject: Subject<number>;

  private startX: number;
  private startY: number;

  constructor(
    private element: ElementRef
  ) {}

  ngOnInit() {
    (<HTMLElement>this.element.nativeElement).style.left = (screen.width - 220) / 2 + 'px';
    this.navigationSubject
      .subscribe(offset => {
        const paddiing = parseInt((<HTMLElement>this.element.nativeElement).style.left, 10) || (screen.width - 220) / 2;

        (<HTMLElement>this.element.nativeElement).style.left = +paddiing + offset * 245 + 'px';
      });
  }

  @HostListener('touchstart', ['$event'])
  reactOnTouchEvent($event): void {
    this.startX = $event.changedTouches[0].clientX;
    this.startY = $event.changedTouches[0].clientY;
  }

  @HostListener('touchend', ['$event'])
  reactOnTouchEndEvent($event): void {
    if (Math.abs($event.changedTouches[0].clientY - this.startY) > Math.abs($event.changedTouches[0].clientX - this.startX)) {
      return;
    }

    if ($event.changedTouches[0].clientX !== this.startX) {
      const offset = parseInt((<HTMLElement>this.element.nativeElement).style.left, 10) || (screen.width - 220) / 2;

      if ($event.changedTouches[0].clientX > this.startX && !this.disableRightSwipe) {
        (<HTMLElement>this.element.nativeElement).style.left = +offset + 245 + 'px';
        this.swipeRightEvent.emit(true);
      } else
      if ($event.changedTouches[0].clientX < this.startX && !this.disableLeftSwipe) {
        (<HTMLElement>this.element.nativeElement).style.left = +offset - 245 + 'px';
        this.swipeLeftEvent.emit(true);
      }
    }
  }

}
