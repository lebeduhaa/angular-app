import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CombinationsRoutingModule } from './combinations-routing.module';
import { CombinationsComponent } from './component/combinations.component';
import { CombinationsSideBarComponent } from './component/combinations-side-bar/combinations-side-bar.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  imports: [
    SharedModule,
    CombinationsRoutingModule,
    MaterialModule
  ],
  declarations: [
    CombinationsComponent,
    CombinationsSideBarComponent
  ],
  exports: [
    CombinationsComponent
  ]
})
export class CombinationsModule {}
