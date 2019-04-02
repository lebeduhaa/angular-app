import { Component, OnInit } from '@angular/core';

import { appearsFromLeft } from 'src/app/shared/animations';
import { SubjectService } from 'src/app/shared/services/subject.service';

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

  constructor(
    private subjectService: SubjectService
  ) {}

  ngOnInit() {
    this.subjectService.getSubject('side-bar-subject-visibility')
      .subscribe(value => this.showSidebar());
  }

  public hideSedebar(): void {
    this.sideBarVisibility = false;
  }

  public showSidebar(): void {
    this.sideBarVisibility = true;
  }

}
