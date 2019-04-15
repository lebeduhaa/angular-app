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
import { MobileHeaderComponent } from './component/mobile-header/mobile-header.component';
import { MobileNavigationComponent } from './component/mobile-navigation/mobile-navigation.component';
import { ParameterComponent } from './component/about-combination/parameter/parameter.component';
import { CaloriesComponent } from './component/about-combination/calories/calories.component';
import { CoeficientComponent } from './component/about-combination/coeficient/coeficient.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  imports: [
    SharedModule,
    CombinationsRoutingModule,
    MaterialModule,
    DirectivesModule
  ],
  declarations: [
    CombinationsComponent,
    CombinationsSideBarComponent,
    CombinationsHeaderComponent,
    InfoComponent,
    OwnCombinationComponent,
    AboutCombinationComponent,
    MobileHeaderComponent,
    MobileNavigationComponent,
    ParameterComponent,
    CaloriesComponent,
    CoeficientComponent,
    RecipesComponent
  ],
  exports: [
    CombinationsComponent
  ]
})
export class CombinationsModule {}
