import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/membership', title: 'Member', icon: 'card_membership', class: '' },
  { path: '/car', title: 'Cars', icon: 'style', class: '' },
  { path: '/brand', title: 'Brand', icon: 'military_tech', class: '' },
  { path: '/statistical', title: 'Statistic', icon: 'analytics', class: '' },
  { path: '/system', title: 'System', icon: 'settings', class: '' },
  { path: '/other', title: 'Others', icon: 'open_with', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
