import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/car.models';

@Component({
  selector: 'work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {

  @Input('card') card: Car;
  @Input('isHidden') isHidden: boolean;
  public platforms: any;

  constructor() { }

  ngOnInit() {
    
  }

}
