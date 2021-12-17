import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService {
  public carEndpoint = `${environment.API_URL}/cars`;
  public bookingEndpoint = `${environment.API_URL}/contracts`;

  getAllCars() {
    return this.get(this.carEndpoint);
  }

  getOwnerCar() {
    return this.get(`${this.carEndpoint}/mycars`);
  }

  getCarById(id: any) {
    return this.get(`${this.carEndpoint}/${id}`);
  }

  bookingCar(body: any) {
    return this.post(body, this.bookingEndpoint);
  }

  getContract() {
    return this.get(`${this.bookingEndpoint}/mycontracts`);
  }

  getBrands() {
    return this.get(`${environment.API_URL}/brands`);
  }

  addNewCar(body) {
    return this.post(body, `${this.carEndpoint}`)
  }

  editCar(id, body) {
    return this.patch(body, `${this.carEndpoint}/${id}`)
  }

  deleteCar(id) {
    return this.delete(`${this.carEndpoint}/remove/${id}`)
  }

  uploadImage(id, data) {
    return this.post(data, `${this.carEndpoint}/${id}`)
  }
}
