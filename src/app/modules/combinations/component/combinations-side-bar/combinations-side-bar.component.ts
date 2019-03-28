import { Component } from '@angular/core';
import { APP } from 'src/app/shared/application-constants';

@Component({
  selector: 'app-combinations-side-bar',
  templateUrl: 'combinations-side-bar.component.html',
  styleUrls: ['combinations-side-bar.component.css']
})
export class CombinationsSideBarComponent {

  public currentCombination = 1;
  public combinationImtes = APP.combinationImtes;
  public selectedItem: string;

  public getImage(): string {
    return `url('assets/img/combinations/${this.currentCombination}.png')`;
  }

  public goPrevDisabled(): boolean {
    return this.currentCombination === 1;
  }

  public goNextDisabled(): boolean {
    return this.currentCombination === 9;
  }

  public decCombination(): void {
    this.currentCombination--;
  }

  public incCombination(): void {
    this.currentCombination++;
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
