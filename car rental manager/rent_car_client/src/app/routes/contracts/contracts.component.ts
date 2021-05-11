import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  contracts;
  constructor(private bookingService: CarService) { }

  ngOnInit() {
    this.getContracts()
  }

  getContracts() {
    this.bookingService.getContract().subscribe((res: any) => {
      this.contracts = res.data;
    })
  }

}
