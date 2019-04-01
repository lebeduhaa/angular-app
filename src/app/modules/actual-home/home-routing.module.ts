import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './component/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
