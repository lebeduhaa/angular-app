import { Component } from '@angular/core';

@Component({
  selector: 'app-combinations-side-bar',
  templateUrl: 'combinations-side-bar.component.html',
  styleUrls: ['combinations-side-bar.component.css']
})
export class CombinationsSideBarComponent {

  public currentCombination = 1;

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

}
