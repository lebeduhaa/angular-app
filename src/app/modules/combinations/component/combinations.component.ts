import { Component, OnInit } from '@angular/core';

import { appearsFromLeft } from 'src/app/shared/animations';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-combinations',
  templateUrl: 'combinations.component.html',
  styleUrls: ['combinations.component.css'],
  animations: [
    appearsFromLeft
  ]
})
export class CombinationsComponent implements OnInit {

  public sideBarVisibility = false;
  public recipe: boolean;
  public smallScreen: boolean;

  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.subjectService.getSubject('side-bar-subject-visibility')
      .subscribe(result => this.setSideBarVisibility(result));
    this.route.url
      .subscribe(url => this.defindRoute());
  }

  private defindRoute(): void {
    this.smallScreen = screen.width >= 568;

    if (this.router.url.includes('recipe')) {
      this.recipe = true;
    } else {
      this.recipe = false;
    }
  }

  public hideSedebar(): void {
    this.sideBarVisibility = false;
  }

  public setSideBarVisibility(result: boolean): void {
    this.sideBarVisibility = result;
  }

}
