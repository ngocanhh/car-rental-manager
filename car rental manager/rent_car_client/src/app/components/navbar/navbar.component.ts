import { Component, OnInit } from '@angular/core';
import { HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) public platformId: string, private router: Router) { }

  public scrolled = false;
  public isAuth = false;
  public awake = false;
  public display = true;
  public stretching = false;
  public ltkLogo = 'assets/logo/las.png';
  username;
  role;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled = window.scrollY > 30;
      this.awake = window.scrollY > 100;
      if (window.scrollY > 30) {
        this.display = true;
      } else {
        this.ltkLogo = '/assets/logo/las.png';
      }
    }
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  showMobileNav() {
    this.stretching = !this.stretching;
  }

  hiddenMobileNav() {
    this.stretching = !this.stretching;
  }

  ngOnInit() {
    const TOKEN = localStorage.getItem('TOKEN');
    this.username = localStorage.getItem('USERNAME');
    this.role = localStorage.getItem('ROLE');
    if (TOKEN) {
      this.isAuth = true;
    }
    else {
      this.isAuth = false;
    }
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/'])
    setTimeout(() => {
      location.reload()
    }, 1000);
  }


}
