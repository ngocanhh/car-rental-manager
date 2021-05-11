import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService {

  public profileEndpoint = `${environment.API_URL}/user/profile`

  getProfile() {
    return this.get(`${this.profileEndpoint}`);
  }

  updateProfile(body) {
    return this.put(body, `${this.profileEndpoint}/edit`)
  }
}
