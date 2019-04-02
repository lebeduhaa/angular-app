import { Component, OnInit } from '@angular/core';

import { APP } from 'src/app/shared/application-constants';
import { showHide } from 'src/app/shared/animations';
import { RouterHelper } from 'src/app/shared/router.helper';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile-combinations',
  templateUrl: 'combinations.component.html',
  styleUrls: ['combinations.component.css'],
  animations: [
    showHide
  ]
})
export class ProfileCombinationsComponent implements OnInit {

  public currentNav = 1;
  public firstStepCards = APP.firstStepCards;
  public secondStepCards = APP.secondStepCards;
  public thirdStepCards = APP.thirdStepCards;
  public fourthStepCards = APP.fourthStepCards;
  public animationState = '1';
  public allCards: any[];
  public currentCard = 0;
  public navigationSubject = new Subject<number>();


  constructor(
    private routerHelper: RouterHelper
  ) {}

  ngOnInit() {
    this.allCards = this.firstStepCards.concat(
      this.secondStepCards,
      this.thirdStepCards,
      this.fourthStepCards
    );
  }

  public reactOnSwipeEvent(swipe: string): void {
    if (swipe === 'left') {
      this.currentCard++;
    } else {
      this.currentCard--;
    }
  }

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

  public cardSelected(card: number): boolean {
    return this.currentCard === card;
  }

  public disableRightSwipe(): boolean {
    return this.currentCard === 0;
  }

  public disableLeftSwipe(): boolean {
    return this.currentCard === 11;
  }

  public isCurrentCard(card: number): boolean {
    return this.currentCard === card;
  }

  public goToCombinations(): void {
    this.routerHelper.navigateToPage(`/combinations/about/${this.currentCard + 1}/vitamins`);
  }

  public goTo(card: number): void {
    const diff = this.currentCard - card;

    this.currentCard = card;
    this.navigationSubject.next(diff);
  }
}
