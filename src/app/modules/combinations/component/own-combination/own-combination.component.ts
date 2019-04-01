import { Component } from '@angular/core';
import { APP } from 'src/app/shared/application-constants';

@Component({
  selector: 'app-own-combination',
  templateUrl: 'own-combination.component.html',
  styleUrls: ['own-combination.component.css']
})
export class OwnCombinationComponent {

  public a = APP.products.a;
  public b = APP.products.a;

}
