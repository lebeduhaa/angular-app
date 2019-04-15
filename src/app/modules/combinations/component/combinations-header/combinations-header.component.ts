import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-combinations-header',
  templateUrl: 'combinations-header.component.html',
  styleUrls: ['combinations-header.component.css']
})
export class CombinationsHeaderComponent implements OnInit {

  public currentId: string;

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
  }

}
