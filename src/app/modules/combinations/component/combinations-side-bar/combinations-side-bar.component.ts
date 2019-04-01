import { Component, OnInit } from '@angular/core';
import { APP } from 'src/app/shared/application-constants';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterHelper } from 'src/app/shared/router.helper';

@Component({
  selector: 'app-combinations-side-bar',
  templateUrl: 'combinations-side-bar.component.html',
  styleUrls: ['combinations-side-bar.component.css']
})
export class CombinationsSideBarComponent implements OnInit {

  public currentCombination: string;
  public combinationImtes = APP.combinationImtes;
  public selectedItem: string;

  constructor(
    private routerHelper: RouterHelper,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.url
      .subscribe(url => this.defineCombination());
    this.defineCombination();
  }

  private defineCombination(): void {
    const id = this.router.url.split('/')[3];

    if (id) {
      this.currentCombination = id;
    } else {
      this.currentCombination = 'default';
    }
  }

  public getComgination(): string {
    return this.currentCombination !== 'default' ? `комбинация ${this.currentCombination}` : 'своя комбинация';
  }

  public headerNavigationVisibility(): boolean {
    return this.currentCombination !== 'default';
  }

  public getImage(): string {
    return `url('assets/img/combinations/${this.currentCombination}.png')`;
  }

  public goPrevDisabled(): boolean {
    return this.currentCombination === '1';
  }

  public goNextDisabled(): boolean {
    return this.currentCombination === '9';
  }

  public decCombination(): void {
    this.routerHelper.navigateToPage(`/combinations/about/${Number(this.currentCombination) - 1}/vitamins`);
  }

  public incCombination(): void {
    this.routerHelper.navigateToPage(`/combinations/about/${Number(this.currentCombination) + 1}/vitamins`);
  }

  public selectItem(item: string): void {
    this.selectedItem = item;
  }

  public getMenuClass(item: string): any {
    return {
      [`side-bar__group-item_active-${this.currentCombination}`]: item === this.selectedItem
    };
  }

}