import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './component/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from '../home/component/about/about.component';
import { MainComponent } from '../home/component/main/main.component';
import { FeedbackComponent } from '../home/component/feedback/feedback.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { HomeNavigationComponent } from '../home/component/home-navigation/home-navigation.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    DirectivesModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    MainComponent,
    FeedbackComponent,
    HomeNavigationComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
