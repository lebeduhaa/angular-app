import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent {

  public currentStep = 1;
  public selectedGoal = 2;
  public ages = [15, 16, 17, 18, 19, 20, 21, 22, 23];
  public groups = ['Первая группу', 'Работник тяжелого физического труда', 'Третья группа'];
  public preferences = [
    {name: 'Мясо', selected: false},
    {name: 'Рыба', selected: false},
    {name: 'Фрукты', selected: false},
    {name: 'Овощи', selected: false},
    {name: 'Зелень', selected: false},
    {name: 'Молочное', selected: false},
    {name: 'Группа', selected: false},
    {name: 'Группа', selected: false},
    {name: 'Группа', selected: false},
    {name: 'Группа', selected: false},
    {name: 'Группа', selected: false},
    {name: 'Группа', selected: false},
    {name: 'Группа', selected: false},
    {name: 'Группа', selected: false},
    {name: 'Группа', selected: false},
    {name: 'Группа', selected: false}
  ];
  public additionalGroups = [
    {
      title: 'группа 1',
      items: [
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Мазик', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false }
      ]
    },
    {
      title: 'группа 2',
      items: [
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Курица', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false }
      ]
    },
    {
      title: 'группа 3',
      items: [
        { name: 'Продукт', selected: false },
        { name: 'Банан', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false }
      ]
    },
    {
      title: 'группа 4',
      items: [
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false }
      ]
    },
    {
      title: 'группа 5',
      items: [
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false }
      ]
    },
    {
      title: 'группа 6',
      items: [
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false },
        { name: 'Продукт', selected: false }
      ]
    }
  ];
  public addPreferencesVisibility = false;
  public scrollHeight: number;

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
