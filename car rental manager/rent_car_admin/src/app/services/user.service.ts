import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  private endpoint = `${env.API_URL}`;
  private userEndpoint = `${env.API_URL}/user`;
  private headers = new HttpHeaders();
  constructor(http: HttpClient) {
    super(http);
  }

  public uploadLevelDatesFile(data) {
    return this.post(data, `${this.userEndpoint}/import-level-dates`);
  }

  public uploadErrorPointFile(data) {
    return this.post(data, `${this.endpoint}/error-point/import`);
  }
}
