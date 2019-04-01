import { NgModule } from '@angular/core';

// import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { CombinationsModule } from './combinations/combinations.module';
import { HomeModule } from './actual-home/home.module';

@NgModule({
  imports: [
    // HomeModule,
    HomeModule,
    ProfileModule,
    CombinationsModule
  ],
  exports: [
    // HomeModule,
    HomeModule,
    ProfileModule,
    CombinationsModule
  ]
})
export class ModulesModule {}
