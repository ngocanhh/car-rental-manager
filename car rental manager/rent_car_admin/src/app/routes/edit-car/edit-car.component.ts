import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmModalComponent } from 'app/modals/confirm-modal/confirm-modal.component';
import { BrandService } from 'app/services/brand.service';
import { CarService } from 'app/services/car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  carForm: FormGroup;
  brands;
  id: any;

  constructor(
    private brandService: BrandService,
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.carForm = new FormGroup({
      id: new FormControl(null),
      brandId: new FormControl(null),
      carNumberPlate: new FormControl(null),
      location: new FormControl(null),
      name: new FormControl(null),
      rentCost: new FormControl(null),
      image: new FormControl(null),
      fuel: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getInfo();
      console.log(this.id);
    });
    this.getBrands();
  }

  onSave() {
    const req = {
      ...this.carForm.value
    }
    this.carService.updateCar(this.id, req).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/car'])
    })
  }

  getBrands() {
    this.brandService.getBrands().subscribe((res: any) => {
      this.brands = res.data;
    })
  }

  getInfo() {
    this.carService.getCarById(this.id).subscribe((res: any) => {
      this.carForm.patchValue({
        ...res.data
      })
    })
  }

  confirm() {
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.componentInstance.title = 'Update confirm';
    dialogRef.componentInstance.content = 'Do you want to update this car?';
    dialogRef.componentInstance.action = 'Yes';
    dialogRef.afterClosed().subscribe(result => {
      result ? this.onSave() : null;
    });
  }
}
