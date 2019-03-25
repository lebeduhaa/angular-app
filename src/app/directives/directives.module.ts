import { NgModule } from '@angular/core';
import { HoverScaleDirective } from './hover-scale.directive';
import { ScrollNextDirective } from './stroll-next.directive';

@NgModule({
  declarations: [
    HoverScaleDirective,
    ScrollNextDirective
  ],
  exports: [
    HoverScaleDirective,
    ScrollNextDirective
  ]
})
export class DirectivesModule {}
