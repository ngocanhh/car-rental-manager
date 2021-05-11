import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { Store } from '@ngrx/store';
import { selectAuthState } from 'app/redux/app.state';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
    public token;
    constructor(private authService: AuthService, private store: Store) {
        this.store.select(selectAuthState).subscribe((state: any) => {
            this.token = state.access_token;
        });
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const newReq = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.token,
            },
        });
        return next.handle(newReq);
    }
}
