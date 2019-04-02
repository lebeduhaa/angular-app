import { NgModule } from '@angular/core';

import { HoverScaleDirective } from './hover-scale.directive';
import { ScrollNextDirective } from './stroll-next.directive';
import { ScrollToDirective } from './scroll-to.direcitve';
import { SwipeDirective } from './swipe.directive';

@NgModule({
  declarations: [
    HoverScaleDirective,
    ScrollNextDirective,
    ScrollToDirective,
    SwipeDirective
  ],
  exports: [
    HoverScaleDirective,
    ScrollNextDirective,
    ScrollToDirective,
    SwipeDirective
  ]
})
export class DirectivesModule {}
