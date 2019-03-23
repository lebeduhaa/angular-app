import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './component/main/main.component';
import { AboutComponent } from './component/about/about.component';
import { SourcesComponent } from './component/sources/sources.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { HomeComponent } from './component/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: 'main', component: MainComponent, data: {animation: '1'} },
          { path: 'about', component: AboutComponent, data: {animation: '2'} },
          { path: 'sources', component: SourcesComponent, data: {animation: 'Sources'} },
          { path: 'feedback', component: FeedbackComponent, data: {animation: 'Feedback'} }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
