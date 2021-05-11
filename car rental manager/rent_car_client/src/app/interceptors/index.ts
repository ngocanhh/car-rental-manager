import { ClassProvider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BearerInterceptor } from './bearer.interceptor';


export const interceptors: ClassProvider[] = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: BearerInterceptor,
        multi: true,
    }
];
