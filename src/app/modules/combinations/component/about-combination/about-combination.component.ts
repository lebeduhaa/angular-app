import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-combination',
  templateUrl: 'about-combination.component.html',
  styleUrls: ['about-combination.component.css']
})
export class AboutCombinationComponent implements OnInit {

  public currentCombination: number;
  public vitaminsActive: boolean;
  public mineralsActive: boolean;
  public acidsActive: boolean;

  private currentUrl: string;

  constructor(
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.router.params
      .subscribe(params => {
        this.currentCombination = params.id;
        this.currentUrl = this.route.url;
        this.defineActivity();
      });
    this.router.url
      .subscribe(url => {
        this.currentUrl = this.route.url;
        this.defineActivity();
      });
  }

  private defineActivity() {
    if (this.currentUrl.includes('vitamins')) {
      this.vitaminsActive = true;
    } else {
      this.vitaminsActive = false;
    }

    if (this.currentUrl.includes('minerals')) {
      this.mineralsActive = true;
    } else {
      this.mineralsActive = false;
    }

    if (this.currentUrl.includes('acids')) {
      this.acidsActive = true;
    } else {
      this.acidsActive = false;
    }
  }

}
