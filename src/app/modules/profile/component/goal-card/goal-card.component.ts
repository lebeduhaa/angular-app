import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-goal-card',
  templateUrl: 'goal-card.component.html',
  styleUrls: ['goal-card.component.css']
})
export class GoalCardComponent {

  @Input() image: string;
  @Input() title: string;
  @Input() description: string;

}
