import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddOrderComponent } from 'src/app/modals/add-order/add-order.component';
import { ConfirmModalComponent } from 'src/app/modals/confirm-modal/confirm-modal.component';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  // cars = [
  //   {
  //     id: 1,
  //     name: 'test',
  //     carNumberPlate:1,
  //     brandName: 'Honda',
  //     ownerName: 'Test',
  //     location: 'HCM',
  //     rentCost: 2000,
  //     status: 'Waiting'
  //   }
  // ];
  cars;
  constructor(
    private carService: CarService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carService.getOwnerCar().subscribe((res: any) => {
      this.cars = res.data;
    })
  }

  addNewOrder() {
    const modalRef = this.modalService.open(AddOrderComponent, {centered: true, size: 'lg'});
    modalRef.result.then(value => {
      if(value) {
        this.getCars();
      }
    })
  }

  editOrder(car) {
    const modal = this.modalService.open(AddOrderComponent, {centered: true, size: 'lg'});
    const modalRef = modal.componentInstance as AddOrderComponent;
    modalRef.data = car;
    modal.result.then(value => {
      if(value) {
        this.getCars();
      }
    })
  }

  deleteOrder(id) {
    let data = {
      title: 'Delete Order',
      content: 'Are you sure you want to delete this order?',
      isDanger: true
    }
    const modalRef = this.modalService.open(ConfirmModalComponent, {centered: true})
    modalRef.componentInstance.data = data;
    modalRef.result.then((value) => {
      if(value) {
        this.carService.deleteCar(id).subscribe((res: any) => {
          if(res.data == 'Ok'){
            this.getCars();
          }
        })
      }
    })
  }
}
