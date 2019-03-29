import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-combination-card',
  templateUrl: 'combination-card.component.html',
  styleUrls: ['combination-card.component.css']
})
export class CombinationCardComponent {

  @Input() title: string;
  @Input() coefficient: number;
  @Input() calories: number;
  @Input() proteins: number;
  @Input() fats: number;
  @Input() carbohydrates: number;
  @Input() components: string[];
  @Input() image: string;
  @Input() link: string;

  public getBackground(): any {
    return `url('assets/img/cards/${this.image}')`;
  }

}
