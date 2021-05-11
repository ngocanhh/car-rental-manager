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
      image: new FormControl(null),
      fuel: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.getBrands();
  }

  onSave() {
    const req = {
      ...this.carForm.value
    }
    this.carService.createCar(req).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/car'])
    })
  }

  getBrands() {
    this.brandService.getBrands().subscribe((res: any) => {
      this.brands = res.data;
    })
  }

}
