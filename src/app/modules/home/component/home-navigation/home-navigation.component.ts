import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-navigation',
  templateUrl: 'home-navigation.component.html',
  styleUrls: ['home-navigation.component.css']
})
export class HomeNavigationComponent implements OnInit {

  public nowFeedback: boolean;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((route: NavigationEnd) => this.reactOnChangeRoute(route.url));
    this.reactOnChangeRoute(this.router.url);
  }

  private reactOnChangeRoute(url: string): void {
    if (url.includes('feedback')) {
      this.nowFeedback = true;
    } else {
      this.nowFeedback = false;
    }
  }

}
