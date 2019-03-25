import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterHelper {

  constructor(
    private router: Router
  ) {}

  public navigateToPage(url: string): void {
    this.router.navigate([url]);
  }

}
