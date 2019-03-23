import { NgModule } from '@angular/core';

import { HomeComponent } from './component/home.component';
import { MainComponent } from './component/main/main.component';
import { AboutComponent } from './component/about/about.component';
import { SourcesComponent } from './component/sources/sources.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeNavigationComponent } from './component/home-navigation/home-navigation.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    MainComponent,
    AboutComponent,
    SourcesComponent,
    FeedbackComponent,
    HomeNavigationComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
