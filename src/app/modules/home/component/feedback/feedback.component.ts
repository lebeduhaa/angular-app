import { Component } from '@angular/core';
import { RouterHelper } from 'src/app/shared/router.helper';
import { APP } from 'src/app/shared/application-constants';

@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.css']
})
export class FeedbackComponent {

  constructor(
    private routerHelper: RouterHelper
  ) {}

  public reactOnScrollPrevEvent(): void {
    this.routerHelper.navigateToPage(APP.pages.sources);
  }

}
