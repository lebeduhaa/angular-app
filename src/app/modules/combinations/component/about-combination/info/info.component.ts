import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP } from 'src/app/shared/application-constants';

@Component({
  selector: 'app-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.css']
})
export class InfoComponent implements OnInit {

  public type: string;
  public items: any[];

  constructor(
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.url
      .subscribe(url => this.handleUrl(url[0].path));
  }

  public handleUrl(url: string): void {
    switch (url) {
      case 'vitamins':
        this.type = 'витамины';
        this.items = APP.vitamins;
        break;
      case 'minerals':
        this.type = 'минералы';
        this.items = APP.minarals;
        break;
      case 'amino-acids':
        this.type = 'аминокислоты';
        this.items = APP.acids;
        break;
    }
  }

}
