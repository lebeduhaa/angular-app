import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {

  @Input() id: string;

  @HostListener('click')
  scrollTo(): void {
    const offset = document.getElementById(this.id).offsetTop;
    window.scrollTo({top: offset, left: 0, behavior: 'smooth'});
  }

}
