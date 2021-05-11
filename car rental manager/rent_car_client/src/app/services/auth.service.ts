import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  login(body) {
    return this.post(body, `${environment.API_URL}/login`);
  }

  regis(body) {
    return this.post(body, `${environment.API_URL}/user/register`)
  }
}
