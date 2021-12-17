import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: "root",
})
export class AuthService extends BaseService {
  public isDisplay = new Subject();

  login(body) {
    return this.post(body, `${environment.API_URL}/login`);
  }

  regis(body) {
    return this.post(body, `${environment.API_URL}/user/register`);
  }
}
