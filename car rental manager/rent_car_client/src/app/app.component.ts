import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tuan-khoi';

  constructor(private router: Router, @Inject(PLATFORM_ID) public platformId: string) {

  }
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {

        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          if (isPlatformBrowser(this.platformId)) {
            window.scrollTo(0, 0);
          }
        }
      });
  }
}
