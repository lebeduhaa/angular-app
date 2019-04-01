import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CombinationsRoutingModule } from './combinations-routing.module';
import { CombinationsComponent } from './component/combinations.component';
import { CombinationsSideBarComponent } from './component/combinations-side-bar/combinations-side-bar.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { CombinationsHeaderComponent } from './component/combinations-header/combinations-header.component';
import { OwnCombinationComponent } from './component/own-combination/own-combination.component';
import { AboutCombinationComponent } from './component/about-combination/about-combination.component';
import { InfoComponent } from './component/about-combination/info/info.component';

@NgModule({
  imports: [
    SharedModule,
    CombinationsRoutingModule,
    MaterialModule
  ],
  declarations: [
    CombinationsComponent,
    CombinationsSideBarComponent,
    CombinationsHeaderComponent,
    InfoComponent,
    OwnCombinationComponent,
    AboutCombinationComponent
  ],
  exports: [
    CombinationsComponent
  ]
})
export class CombinationsModule {}