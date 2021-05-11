import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHidden = true;
  test: any;
  brands = [
    {
      img: 'assets/brand/rr.png',
    },
    {
      img: 'assets/brand/ben.png',
    },
    {
      img: 'assets/brand/mec.png',
    },
    {
      img: 'assets/brand/bmv.png',
    },
    {
      img: 'assets/brand/ferr.png',
    },
    {
      img: 'assets/brand/lambo.png',
    },
    {
      img: 'assets/brand/audi.png',
    },
    {
      img: 'assets/brand/ford.png',
    },
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isHidden = false;
    }, 3000);
  }


  }
