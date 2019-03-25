import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-navigation',
  templateUrl: 'profile-navigation.component.html',
  styleUrls: ['profile-navigation.component.css']
})
export class ProfileNavigationComponent {

  @Output() changeCurrentStepEvent = new EventEmitter<number>();

  @Input() currentStep: number;


  public changeCurrentStep(newStep: number): void {
    this.changeCurrentStepEvent.emit(newStep);
  }

  public fillGoals(): boolean {
    return this.currentStep >= 1;
  }

  public fillParameters(): boolean {
    return this.currentStep >= 2;
  }

  public fillCombinations(): boolean {
    return this.currentStep >= 3;
  }

}
