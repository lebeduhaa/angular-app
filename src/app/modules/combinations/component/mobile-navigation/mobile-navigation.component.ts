import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: 'mobile-navigation.component.html',
  styleUrls: ['mobile-navigation.component.css']
})
export class MobileNavigationComponent implements OnInit {

  public currentId: string;
  public recipes: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.url
      .subscribe(url => this.defindId());
  }

  private defindId(): void {
    this.currentId = this.router.url.split('/')[3];
    if (this.router.url.includes('recipes')) {
      this.recipes = true;
    } else {
      this.recipes = false;
    }
  }

}
