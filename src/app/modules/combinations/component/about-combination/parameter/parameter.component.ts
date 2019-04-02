import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: 'parameter.component.html',
  styleUrls: ['parameter.component.css']
})
export class ParameterComponent {

  @Input() procent: number;
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;

  public getImage(): string {
    return `url('assets/img/combinations/${this.image}')`;
  }

}
