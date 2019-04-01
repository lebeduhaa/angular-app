import { NgModule } from '@angular/core';

import { HoverScaleDirective } from './hover-scale.directive';
import { ScrollNextDirective } from './stroll-next.directive';
import { ScrollToDirective } from './scroll-to.direcitve';

@NgModule({
  declarations: [
    HoverScaleDirective,
    ScrollNextDirective,
    ScrollToDirective
  ],
  exports: [
    HoverScaleDirective,
    ScrollNextDirective,
    ScrollToDirective
  ]
})
export class DirectivesModule {}
