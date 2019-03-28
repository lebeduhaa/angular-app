import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CombinationsComponent } from './component/combinations.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'combinations', component: CombinationsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CombinationsRoutingModule {}
