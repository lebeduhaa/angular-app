import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterHelper } from 'src/app/shared/router.helper';

@Component({
  selector: 'app-mobile-header',
  templateUrl: 'mobile-header.component.html',
  styleUrls: ['mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  public currentCombination = '1';
  public showSideBarButton: boolean;

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private route: ActivatedRoute,
    private routerHelper: RouterHelper
  ) {}

  ngOnInit() {
    this.route.url
      .subscribe(url => this.defineCombination());
  }

  private defineCombination(): void {
    const id = this.router.url.split('/')[3];

    if (id) {
      this.currentCombination = id;
    } else {
      this.currentCombination = 'default';
    }

    if (this.router.url.includes('recipe')) {
      this.showSideBarButton = false;
    } else {
      this.showSideBarButton = true;
    }
  }

  public showSideBar(): void {
    this.subjectService.emitSubject('side-bar-subject-visibility', true);
  }

  public goPrevDisabled(): boolean {
    return this.currentCombination === '1';
  }

  public goNextDisabled(): boolean {
    return this.currentCombination === '9';
  }

  public decCombination(): void {
    this.routerHelper
      .navigateToPage(`/combinations/${this.router.url.split('/')[2]}/${Number(this.currentCombination) - 1}${this.router.url.includes('recipe') ? '' : '/vitamins'}`);
  }

  public incCombination(): void {
    this.routerHelper
    .navigateToPage(`/combinations/${this.router.url.split('/')[2]}/${Number(this.currentCombination) + 1}${this.router.url.includes('recipe') ? '' : '/vitamins'}`);
  }

}
