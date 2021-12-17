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
  logo;

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
      numberOfSeat: new FormControl(null),
      file: new FormControl(null)
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
    const formData: FormData = new FormData();
    formData.append('file', this.carForm.controls.file.value);
    let data = {
      name: this.carForm.controls.name.value,
      numberOfSeat: this.carForm.controls.numberOfSeat.value,
      carNumberPlate: this.carForm.controls.carNumberPlate.value,
      rentCost: this.carForm.controls.rentCost.value,
      location: this.carForm.controls.location.value,
      brandId: this.carForm.controls.brandId.value,
      fuel: this.carForm.controls.fuel.value
    }
    this.carService.updateCar(this.carForm.controls.id.value, data).subscribe((res: any) => {
      if (res.status == 'Ok') {
        if (this.carForm.controls.file.value) {
          this.carService.uploadImage(res.data.id, formData).subscribe((res: any) => {
            if (res.data == 'Ok') {
              this.router.navigate(['/car'])
            }
          })
        } else {
          this.router.navigate(['/car'])
        }
      }
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
      this.logo = res.data.image;
    })
  }

  handleFileInput(files: FileList) {
    if (files.length > 0 && this.validationInput(files[0])) {
      this.carForm.controls.file.setValue(files[0]);
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);
      reader.onload = (event) => {
        this.logo = event.target.result;
      };
    }
  }

  validationInput(file: File) {
    return (
      file.type.includes('image/')
    );
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
