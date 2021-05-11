import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
// tslint:disable-next-line: max-line-length
import { LOGIN, Login, LogInFailure, LogInSuccess, LOGOUT, REGISTRATION, Registration, RegistrationFailure, RegistrationSuccess } from '../actions/auth.action';
// tslint:disable-next-line: max-line-length
import { selectAuthState } from '../app.state';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<any>,
  ) {
    // this.store.select(selectAuthState).subscribe((state) => {
    //     // tslint:disable-next-line: no-string-literal
    //     if (state['isAuthenticated']) {
    //         // tslint:disable-next-line: no-string-literal
    //         this.user = state['user'];
    //     } else {
    //         this.user = null;
    //     }
    // });

  }
  user;
  email;
  userId;

  @Effect()
  Login: Observable<any> = this.actions.pipe(
    ofType(LOGIN),
    map((action: Login) => action.payload),
    switchMap(payload => {
      return this.authService.login(payload)
    }),
    map((res: any) => {
      // tslint:disable-next-line: no-string-literal
      if (res.statusCode === 200) {
        this.router.navigate(['/dashboard']);
        return new LogInSuccess({ ...res.data });
      }
    }),
    catchError(err => {
      return of(new LogInFailure({ error: err.message }));
    }),
  );

  // @Effect({ dispatch: false })
  // public LogOut: Observable<any> = this.actions.pipe(
  //   ofType(LOGOUT),
  //   map(() => {
  //     this.authService.logout();
  //     this.router.navigate(['/auth/login']);
  //   })
  // );
  // tslint:disable-next-line: eofline
}
