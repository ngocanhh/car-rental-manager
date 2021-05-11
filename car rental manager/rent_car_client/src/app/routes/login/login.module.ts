import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInModule } from 'src/app/modals/sign-in/sign-in.module';
import { RegisterModule } from 'src/app/modals/register/register.module';

const routes: Routes = [
  {
      path: '',
      component: LoginComponent
  }
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NgbModalModule,
    SignInModule,
    RegisterModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
