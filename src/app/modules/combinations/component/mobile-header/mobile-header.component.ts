import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterHelper } from 'src/app/shared/router.helper';

@Component({
  selector: 'app-mobile-header',
  templateUrl: 'mobile-header.component.html',
  styleUrls: ['mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  public currentCombination = '1';
  public showSideBarButton: boolean;
  public recipe: boolean;
  public currentRecipe: string;

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private route: ActivatedRoute,
    private routerHelper: RouterHelper
  ) {}

  ngOnInit() {
    this.route.url
      .subscribe(url => this.defineCombination());
  }

  private defineCombination(): void {
    const id = this.router.url.split('/')[3];

    if (id) {
      this.currentCombination = id;
    } else {
      this.currentCombination = 'default';
    }

    if (this.router.url.includes('recipe')) {
      this.showSideBarButton = false;
    } else {
      this.showSideBarButton = true;
    }

    if (this.router.url.split('/')[2] === 'recipe') {
      this.recipe = true;
      this.currentRecipe = this.router.url.split('/')[4];
    } else {
      this.recipe = false;
    }
  }

  public showSideBar(): void {
    this.subjectService.emitSubject('side-bar-subject-visibility', true);
  }

  public goPrevDisabled(): boolean {
    return this.currentCombination === '1';
  }

  public goNextDisabled(): boolean {
    return this.currentCombination === '9';
  }

  public decCombination(): void {
    this.routerHelper
      .navigateToPage(`/combinations/${this.router.url.split('/')[2]}/${Number(this.currentCombination) - 1}${this.router.url.includes('recipe') ? '' : '/vitamins'}`);
  }

  public incCombination(): void {
    this.routerHelper
    .navigateToPage(`/combinations/${this.router.url.split('/')[2]}/${Number(this.currentCombination) + 1}${this.router.url.includes('recipe') ? '' : '/vitamins'}`);
  }

  public decRecipe(): void {
    this.routerHelper
      .navigateToPage(`/combinations/recipe/${this.router.url.split('/')[3]}/${Number(this.currentRecipe) - 1}`);
  }

  public incRecipe(): void {
    this.routerHelper
      .navigateToPage(`/combinations/recipe/${this.router.url.split('/')[3]}/${Number(this.currentRecipe) + 1}`);
  }

}
