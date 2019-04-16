import { NgModule } from '@angular/core';

import { HoverScaleDirective } from './hover-scale.directive';
import { ScrollNextDirective } from './stroll-next.directive';
import { ScrollToDirective } from './scroll-to.direcitve';
import { SwipeDirective } from './swipe.directive';
import { PreventScrollDirective } from './prevent-scroll.directive';

@NgModule({
  declarations: [
    HoverScaleDirective,
    ScrollNextDirective,
    ScrollToDirective,
    SwipeDirective,
    PreventScrollDirective
  ],
  exports: [
    HoverScaleDirective,
    ScrollNextDirective,
    ScrollToDirective,
    SwipeDirective,
    PreventScrollDirective
  ]
})
export class DirectivesModule {}
