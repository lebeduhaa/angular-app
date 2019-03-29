import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CombinationsComponent } from './component/combinations.component';
import { InfoComponent } from './component/info/info.component';
import { OwnCombinationComponent } from './component/own-combination/own-combination.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'combinations/:id',
        component: CombinationsComponent,
        children: [
          { path: 'vitamins', component: InfoComponent },
          { path: 'minerals', component: InfoComponent },
          { path: 'amino-acids', component: InfoComponent }
        ]
      },
      { path: 'own-combination', component: OwnCombinationComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CombinationsRoutingModule {}
