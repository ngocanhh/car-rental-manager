import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Car } from 'src/app/models/car.models';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class PorfolioComponent implements OnInit {
  websiteDesignLists: any;
  cars: Car[] = [];
  websiteDevelopLists = [];
  p = 1;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.carService.getAllCars().subscribe((res: any) => {
      this.cars = res.data;
    })
  }
}
