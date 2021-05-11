import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'src/app/models/brand.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  private _data;
  addForm: FormGroup;
  brands: Brand[];
  submitBtnText = 'Add';
  title = 'Add new car';
  error;

  @Input() set data(value) {
    this._data = value;
    this.addForm.patchValue(this._data);
  }

  get isEdit() { return !!this._data; }
  get data() { return this._data; }

  constructor(
    public activeModal: NgbActiveModal,
    private carService: CarService
  ) {
    this.addForm = new FormGroup({
      id: new FormControl(null),
      carNumberPlate: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      fuel: new FormControl(null, Validators.required),
      rentCost: new FormControl(null, Validators.required),
      brandId: new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
    // this.brands = [
    //   {
    //     "id": 1,
    //     "name": "FORD",
    //     "nation": "USA",
    //     "logo": "https://lh3.google.com/u/0/d/1IUo7ekQx3SPYbmUixE3uIhtp0cCQZllb=w1919-h903-iv1"
    //   },
    //   {
    //     "id": 2,
    //     "name": "Honda",
    //     "nation": "Japan",
    //     "logo": "https://lh3.google.com/u/0/d/1MqLYWPdjrz0wARMy8nhXWCb7jHYwujc_=w1919-h903-iv1"
    //   }
    // ]
    if (this.isEdit) {
      this.submitBtnText = 'Save';
      this.title = 'Edit';
    }
    this.carService.getBrands().subscribe((res: any) => {
      this.brands = res.data;
    })
  }

  onSubmit() {
    this.isEdit ? this.onEdit() : this.onCreate();
  }

  onCreate() {
    delete this.addForm.controls.id;
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      this.carService.addNewCar(this.addForm.value).subscribe((res: any) => {
        if(res.data == 'Ok'){
          this.activeModal.close(true);
        }
      })
    } else {
      this.error = 'Please enter this field';
    }
  }

  onEdit() {
    if (this.addForm.valid) {
      this.carService.editCar(this.addForm.value).subscribe((res: any) => {
        if(res.data == 'Ok'){
          this.activeModal.close(true);
        }
      })
    } else {
      this.error = 'Please enter this field';
    }
  }

}
