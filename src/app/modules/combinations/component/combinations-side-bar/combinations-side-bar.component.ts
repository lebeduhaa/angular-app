import { Component, OnInit } from '@angular/core';
import { APP } from 'src/app/shared/application-constants';
import { Route, ActivatedRoute } from '@angular/router';
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

  private page: string;

  constructor(
    private router: ActivatedRoute,
    private routerHelper: RouterHelper
  ) {}

  ngOnInit() {
    this.router.params
      .subscribe(params => {
        this.currentCombination = params.id;
      });
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
    this.routerHelper.navigateToPage(`/combinations/${Number(this.currentCombination) - 1}/vitamins`);
  }

  public incCombination(): void {
    this.routerHelper.navigateToPage(`/combinations/${Number(this.currentCombination) + 1}/vitamins`);
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
