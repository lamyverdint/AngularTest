import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppPaths } from '../models/enums/app-paths.enum';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectTo(number: number): void {
    let path: string;
    switch (number) {
      case 0:
        path = AppPaths.HOME_PAGE;
        break;
      case 1:
        path = AppPaths.ZUUL_PROJECT;
        break;
      case 2:
        break;
    }
    this.router.navigate([path]);
  }
}
