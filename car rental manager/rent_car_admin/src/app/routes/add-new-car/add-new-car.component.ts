import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'app/services/brand.service';
import { CarService } from 'app/services/car.service';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {

  carForm: FormGroup;
  brands;
  id: any;
  logo;

  constructor(
    private brandService: BrandService,
    private carService: CarService,
    private router: Router
  ) {
    this.carForm = new FormGroup({
      brandId: new FormControl(null),
      carNumberPlate: new FormControl(null),
      location: new FormControl(null),
      name: new FormControl(null),
      rentCost: new FormControl(null),
      file: new FormControl(null),
      fuel: new FormControl(null),
      numberOfSeat: new FormControl(null)
    });
  }

  ngOnInit(): void {
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
    this.carService.createCar(data).subscribe((res: any) => {
      if (res.status == 'Ok') {
        this.carService.uploadImage(res.data.id, formData).subscribe((res: any) => {
          if (res.data == 'Ok') {
            this.router.navigate(['/car'])
          }
        })
      }
    })
  }

  getBrands() {
    this.brandService.getBrands().subscribe((res: any) => {
      this.brands = res.data;
    })
  }

  handleFileInput(files: FileList) {
    if (files.length > 0 && this.validationInput(files[0])) {
      this.carForm.controls.file.setValue(files[0]);
      console.log(files[0]);
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

}
