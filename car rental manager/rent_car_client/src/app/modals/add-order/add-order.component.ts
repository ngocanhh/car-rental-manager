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
  url;

  @Input() set data(value) {
    this._data = value;
    this.addForm.patchValue(this._data);
    this.url = this._data.image;
  }

  get isEdit() { return !!this._data; }
  get data() { return this._data; }

  constructor(
    public activeModal: NgbActiveModal,
    private carService: CarService
  ) {
    this.addForm = new FormGroup({
      id: new FormControl(null),
      numberOfSeat: new FormControl(null, Validators.required),
      numberPlate: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      file: new FormControl(null),
      name: new FormControl(null, Validators.required),
      fuel: new FormControl(null, Validators.required),
      rentCost: new FormControl(null, Validators.required),
      brandId: new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
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

  handleFileInput(files: FileList) {
    console.log(files[0]);
    if (files.length > 0 && this.validationInput(files[0])) {
      this.error = null;
      this.addForm.controls.file.setValue(files[0]);
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);
      reader.onload = (event) => {
        this.url = reader.result;
      };
    }

  }

  validationInput(file: File) {
    return (
      file.type.includes('image/')
    );
  }

  onCreate() {
    const formData: FormData = new FormData();
    formData.append('file', this.addForm.controls.file.value);
    if (this.addForm.valid) {
      let data = {
        name: this.addForm.controls.name.value,
        numberOfSeat: this.addForm.controls.numberOfSeat.value,
        numberPlate: this.addForm.controls.numberPlate.value,
        rentCost: this.addForm.controls.rentCost.value,
        location: this.addForm.controls.location.value,
        brandId: this.addForm.controls.brandId.value,
        fuel: this.addForm.controls.fuel.value
      }
      this.carService.addNewCar(data).subscribe((res: any) => {
        if (res.status == 'Ok') {
          this.carService.uploadImage(res.data.id, formData).subscribe((res: any) => {
            if (res.data == 'Ok') {
              this.activeModal.close(true);
            }
          })
        }
      })
    } else {
      this.error = 'Please enter this field';
    }
  }

  onEdit() {
    const formData: FormData = new FormData();
    formData.append('file', this.addForm.controls.file.value);
    if (this.addForm.valid) {
      let data = {
        name: this.addForm.controls.name.value,
        numberOfSeat: this.addForm.controls.numberOfSeat.value,
        numberPlate: this.addForm.controls.numberPlate.value,
        rentCost: this.addForm.controls.rentCost.value,
        location: this.addForm.controls.location.value,
        brandId: this.addForm.controls.brandId.value,
        fuel: this.addForm.controls.fuel.value
      }
      this.carService.editCar(this.addForm.controls.id.value, data).subscribe((res: any) => {
        if (res.status == 'Ok') {
          if (this.addForm.controls.file.value) {
            this.carService.uploadImage(res.data.id, formData).subscribe((res: any) => {
              if (res.data == 'Ok') {
                this.activeModal.close(true);
              }
            })
          } else {
            this.activeModal.close(true);
          }
        }
      })
    } else {
      this.error = 'Please enter this field';
    }
  }

}
