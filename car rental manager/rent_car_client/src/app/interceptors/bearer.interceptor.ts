import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
    public token;
    constructor() {
        this.token = localStorage.getItem('TOKEN');
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (this.token) {
            const newReq = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.token,
                },
            });
            return next.handle(newReq);
        }
        else {
            const newReq = request.clone({
                setHeaders: {},
            });
            return next.handle(newReq);
        }
    }
}
