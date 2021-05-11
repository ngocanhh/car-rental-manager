import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService {

  private carEndpoint = `${env.API_URL}/admin/cars`;

  constructor(http: HttpClient) {
    super(http);
  }

  public getCars() {
    return this.get(this.carEndpoint);
  }

  public updateCar = (id: number, data: any) => {
    return this.put(data, `${this.carEndpoint}`);
  }

  public createCar(data: any) {
    return this.post(data, `${this.carEndpoint}`);
  }

  public deleteCarById(id: any) {
    return this.delete(`${this.carEndpoint}/${id}`);
  }

  public getCarById = (id: number) => {
    return this.get(`${this.carEndpoint}/${id}`);
  }
}
