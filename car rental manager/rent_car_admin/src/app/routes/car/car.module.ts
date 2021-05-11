import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { Route, RouterModule } from '@angular/router';
import { ConfirmModalModule } from 'app/modals/confirm-modal/confirm-modal.module';

const routes: Route[] = [
  {
    path: '',
    component: CarComponent
  }
]

@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule,
    ConfirmModalModule,
    RouterModule.forChild(routes),
  ]
})
export class CarModule { }
