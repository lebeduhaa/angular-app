import { Component } from '@angular/core';

import { RouterHelper } from 'src/app/shared/router.helper';
import { APP } from 'src/app/shared/application-constants';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {

  constructor(
    private routerHelper: RouterHelper
  ) {}

  public reactOnScrollPrevEvent(): void {
    this.routerHelper.navigateToPage(APP.pages.main);
  }

  public reactOnScrollNextEvent(): void {
    this.routerHelper.navigateToPage(APP.pages.sources);
  }

}
