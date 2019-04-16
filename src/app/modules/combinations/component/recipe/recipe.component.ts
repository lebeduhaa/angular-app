import { Component, OnInit } from '@angular/core';
import { APP } from 'src/app/shared/application-constants';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterHelper } from 'src/app/shared/router.helper';

@Component({
  selector: 'app-recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public currentRecipe;
  public currentId: string;

  private recipes = APP.recipes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private routerHelper: RouterHelper
  ) {}

  ngOnInit() {
    this.activatedRoute.url
      .subscribe(url => this.defindRecipe());
  }

  private defindRecipe(): void {
    this.currentId = this.router.url.split('/')[4];

    this.currentRecipe = this.recipes.find(recipe => recipe.title.includes(this.currentId));
  }

  public goPrev(): void {
    const tempResult = this.router.url.split('/');
    tempResult[4] = String(Number(this.currentId) - 1);

    this.routerHelper.navigateToPage(tempResult.join('/'));
  }

  public goNext(): void {
    const tempResult = this.router.url.split('/');
    tempResult[4] = String(Number(this.currentId) + 1);

    this.routerHelper.navigateToPage(tempResult.join('/'));
  }

}
