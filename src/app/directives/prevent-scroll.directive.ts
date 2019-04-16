import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventScroll]'
})
export class PreventScrollDirective {

  constructor(
    private element: ElementRef
  ) {}

  @HostListener('mousewheel', ['$event'])
  preventScroll(event) {
    event.preventDefault();
  }

  @HostListener('touchstart', ['$event'])
  onWindowScroll(event) {
    event.preventDefault();
  }

}
