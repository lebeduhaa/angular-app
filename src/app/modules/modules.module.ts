import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { CombinationsModule } from './combinations/combinations.module';

@NgModule({
  imports: [
    HomeModule,
    ProfileModule,
    CombinationsModule
  ],
  exports: [
    HomeModule,
    ProfileModule,
    CombinationsModule
  ]
})
export class ModulesModule {}
