import { NgModule } from '@angular/core';

import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './component/profile.component';
import { ProfileNavigationComponent } from './component/profile-navigation/profile-navigation.component';
import { GoalCardComponent } from './component/goal-card/goal-card.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { CombinationsComponent } from './component/combinations/combinations.component';
import { CombinationCardComponent } from './component/combinations/combination-card/combination-card.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,
    DirectivesModule,
    MaterialModule,
    PerfectScrollbarModule
  ],
  declarations: [
    ProfileComponent,
    ProfileNavigationComponent,
    GoalCardComponent,
    CombinationsComponent,
    CombinationCardComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule {}
