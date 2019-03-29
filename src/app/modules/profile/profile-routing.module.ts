import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './component/profile.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule {}
