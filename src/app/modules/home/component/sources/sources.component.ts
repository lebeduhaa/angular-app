import { Component } from '@angular/core';

import { RouterHelper } from 'src/app/shared/router.helper';
import { APP } from 'src/app/shared/application-constants';

@Component({
  selector: 'app-sources',
  templateUrl: 'sources.component.html',
  styleUrls: ['sources.component.css']
})
export class SourcesComponent {

  constructor(
    private routerHelper: RouterHelper
  ) {}

  public reactOnScrollPrevEvent(): void {
    this.routerHelper.navigateToPage(APP.pages.about);
  }

  public reactOnScrollNextEvent(): void {
    this.routerHelper.navigateToPage(APP.pages.feedback);
  }

}
