import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car.models';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-porfolio-detail',
  templateUrl: './porfolio-detail.component.html',
  styleUrls: ['./porfolio-detail.component.scss'],
  providers: []
})
export class PorfolioDetailComponent implements OnInit {

  public background = 'assets/images/work.jpg';
  id: any;
  listWorks: any;
  // cardDetail: any;
  cardDetail: Car
  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getById();
      console.log(this.id);
    });
  }

  getById() {
    this.carService.getCarById(this.id).subscribe((res: any) => {
      this.cardDetail = res.data;
    })
  }
}
