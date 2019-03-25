import { Component } from '@angular/core';
import { RouterHelper } from 'src/app/shared/router.helper';
import { APP } from 'src/app/shared/application-constants';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent {

  constructor(
    private routerHelper: RouterHelper
  ) {}

  public reactOnScrollNextEvent(): void {
    this.routerHelper.navigateToPage(APP.pages.about);
  }

}
