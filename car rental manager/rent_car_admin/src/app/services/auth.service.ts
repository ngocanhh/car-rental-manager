import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  private TOKEN_KEY = 'token_key';
  private loginEndpoint = `${env.API_URL}/admin/login`;
  private profileEndpoint = `${env.API_URL}/profile`;


  constructor(http: HttpClient) {
    super(http);
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  set token(value: string) {
    localStorage.setItem(this.TOKEN_KEY, value);
  }

  public login = (req: any) => {
    return this.post({ ...req }, this.loginEndpoint);
  }

  public logout = () => {
    localStorage.clear();
  }

  public isAuthenticated = () => {
    if (this.token) { return true; }
  }

  public getProfile = () => {
    return this.get(this.profileEndpoint);
  }
}
