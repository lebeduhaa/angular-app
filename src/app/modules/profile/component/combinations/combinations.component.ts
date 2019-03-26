import { Component } from '@angular/core';

import { APP } from 'src/app/shared/application-constants';
import { showHide } from 'src/app/shared/animations';

@Component({
  selector: 'app-combinations',
  templateUrl: 'combinations.component.html',
  styleUrls: ['combinations.component.css'],
  animations: [
    showHide
  ]
})
export class CombinationsComponent {

  public currentNav = 1;
  public firstStepCards = APP.firstStepCards;
  public secondStepCards = APP.secondStepCards;
  public thirdStepCards = APP.thirdStepCards;
  public fourthStepCards = APP.fourthStepCards;
  public animationState = '1';

  public changeCurrentNav(newNav: number): void {
    this.currentNav = newNav;
  }

  public decNav(): void {
    this.currentNav--;
  }

  public incNav(): void {
    this.currentNav++;
  }

  public goPrevDisabled(): boolean {
    return this.currentNav === 1;
  }

  public goNextDisabled(): boolean {
    return this.currentNav === 4;
  }

}
