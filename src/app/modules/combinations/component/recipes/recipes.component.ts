import { Component } from '@angular/core';

import { APP } from 'src/app/shared/application-constants';
import { showHide } from 'src/app/shared/animations';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.css'],
  animations: [
    showHide
  ]
})
export class RecipesComponent  {

  public firstStepRecipes = APP.firstStepRecipes;
  public secondStepRecipes = APP.secondStepRecipes;
  public thirdStepRecipes = APP.thirdStepRecipes;
  public fourthStepRecipes = APP.fourthStepRecipes;
  public mobileItems = APP.firstStepRecipes.concat(
    APP.secondStepRecipes,
    APP.thirdStepRecipes,
    APP.fourthStepRecipes
  );
  public currentStep = 1;
  public currentRecipe = 0;

  public goNext(): void {
    this.currentStep++;
  }

  public goPrev(): void {
    this.currentStep--;
  }

  public goTo(step: number): void {
    this.currentStep = step;
  }

  public goPrevDisabled(): boolean {
    return this.currentStep === 1;
  }

  public goNextDisabled(): boolean {
    return this.currentStep === 4;
  }

  public goNextMobile(): void {
    this.currentRecipe++;
    window.scrollTo({top: (screen.height - 123) * this.currentRecipe, behavior: 'smooth'});
  }

  public goPrevMobile(): void {
    this.currentRecipe--;
    window.scrollTo({top: (screen.height - 123) * this.currentRecipe, behavior: 'smooth'});
  }

}
