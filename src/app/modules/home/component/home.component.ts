import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerAnimations } from 'src/app/shared/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  animations: [
    routerAnimations
  ]
})
export class HomeComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
