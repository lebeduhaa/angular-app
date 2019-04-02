import { Component, OnInit } from '@angular/core';

import { APP } from 'src/app/shared/application-constants';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentStep = 3;
  public selectedGoal = 2;
  public ages = APP.ages;
  public groups = APP.groups;
  public preferences = APP.preferences;
  public additionalGroups = APP.additionalGroups;
  public addPreferencesVisibility = false;
  public scrollHeight: number;
  public male: string;
  public age: number;
  public height: number;
  public weight: number;
  public group: string;
  public pregnancy: string;

  ngOnInit() {
    setTimeout(() => {
      const element = document.querySelector('.profile__goal-cards');

      if (element) {
        element.scrollTo({left: element.scrollWidth / 2 - element.clientWidth / 2});
      }
    }, 0);
  }

  public closeAdditionalPreferences(): void {
    this.additionalGroups = this.additionalGroups.map(group => {
      group.items.forEach(item => item.selected = false);

      return group;
    });
    this.toggleAddPreferencesVisibility();
  }

  public saveAdditionalPreferences(): void {
    this.additionalGroups.forEach(group => {
      group.items.forEach(item => {
        if (item.selected) {
          this.preferences.push({...item});
        }
      });
    });
    this.closeAdditionalPreferences();
  }

  public reactOnChangeCurrentStepEvent(newStep: number): void {
    this.currentStep = newStep;
  }

  public changeGoal(newGoal: number): void {
    this.selectedGoal = newGoal;
  }

  public firstGoalSelected(): boolean {
    return this.selectedGoal === 1;
  }

  public secondGoalSelected(): boolean {
    return this.selectedGoal === 2;
  }

  public thirdGoalSelected(): boolean {
    return this.selectedGoal === 3;
  }

  public toggleAddPreferencesVisibility(): void {
    const element = document.getElementById('profile__personal-data');

    if (element) {
      this.scrollHeight = element.clientHeight - 100;
    }

    this.addPreferencesVisibility = !this.addPreferencesVisibility;
  }

}
