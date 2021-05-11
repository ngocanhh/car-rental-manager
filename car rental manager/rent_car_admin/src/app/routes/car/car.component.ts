import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from 'app/modals/confirm-modal/confirm-modal.component';
import { CarService } from 'app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [MatDialog]
})
export class CarComponent implements OnInit {

  cars;

  constructor(private router: Router, private carService: CarService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCars();
  }

  editCar = (id) => {
    this.router.navigate([`/edit-car/${id}`]);
  }

  deleteCar(id: any) {
    this.carService.deleteCarById(id).subscribe(res => {
      console.log(res);
      this.getCars();
    })
  }

  getCars() {
    this.carService.getCars().subscribe((res: any) => {
      this.cars = res.data;
    })
  }

  confirmDelete(id) {
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.componentInstance.title = "Delete confirm";
    dialogRef.componentInstance.content = "Do you want to delete permanently this brand?";
    dialogRef.componentInstance.action = "Yes";
    dialogRef.afterClosed().subscribe(result => {
      result ? this.deleteCar(id) : null;
    });
  }

}
