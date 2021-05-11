import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LevelDetail } from 'app/models/level.model';
import { environment as env } from '../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService extends BaseService {

  private levelEndpoint = `${env.API_URL}/admin/dashboard`;

  constructor(http: HttpClient) {
    super(http);
  }

  public getDashboard() {
    return this.get(this.levelEndpoint);
  }
}
