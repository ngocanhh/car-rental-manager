import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends BaseService {

  private levelEndpoint = `${env.API_URL}/admin/brands`;

  constructor(http: HttpClient) {
    super(http);
  }

  public getBrands() {
    return this.get(this.levelEndpoint);
  }

  public updateBrand = (id: number, data: any) => {
    return this.put(data, `${this.levelEndpoint}`);
  }

  public createBrand(data: any) {
    return this.post(data, `${this.levelEndpoint}`);
  }

  public deleteBrandById(id: any) {
    return this.delete(`${this.levelEndpoint}/${id}`);
  }

  public getBrandById = (id: number) => {
    return this.get(`${this.levelEndpoint}/${id}`);
  }
}
