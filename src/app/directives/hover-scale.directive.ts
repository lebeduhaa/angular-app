import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverScale]'
})
export class HoverScaleDirective {

  constructor(
    private element: ElementRef
  ) {}

  @HostListener('mousemove')
  makeLarger(): void {
    this.element.nativeElement.classList.add('profile__goal-card_selected-directive');
  }

  @HostListener('mouseleave')
  makeSmaller(): void {
    this.element.nativeElement.classList.remove('profile__goal-card_selected-directive');
  }

}