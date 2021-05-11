import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private customHeaders = new HttpHeaders();
  constructor(private http: HttpClient) { }

  get<T = {}>(url, options?) {
    return this.http
      .get<T>(url, { ...this.customHeaders, ...options })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  post<T = {}>(body, url, options?) {
    return this.http
      .post<T>(url, body, { ...this.customHeaders, ...options })
      .pipe(catchError(this.handleError)) as unknown as Observable<T>;
  }

  delete<T = {}>(url) {
    return this.http
      .delete<T>(url)
      .pipe(catchError(this.handleError)) as Observable<T>;
  }

  patch<T = {}>(body, url, options?) {
    return this.http
      .patch<T>(url, { ...body }, { ...this.customHeaders, ...options })
      .pipe(catchError(this.handleError)) as unknown as Observable<T>;
  }

  put<T = {}>(body, url, options?) {
    return this.http
      .put<T>(url, { ...body }, { ...this.customHeaders, ...options })
      .pipe(catchError(this.handleError)) as unknown as Observable<T>;
  }

  protected handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
}
