import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { Route, RouterModule } from '@angular/router';
import { HeadingModule } from 'src/app/components/heading/heading.module';
import { AddOrderModule } from 'src/app/modals/add-order/add-order.module';
import { ConfirmModalModule } from 'src/app/modals/confirm-modal/confirm-modal.module';

const routes: Route[] = [
  {
    path: "",
    component: CarsComponent
  }
]

@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    HeadingModule,
    AddOrderModule,
    ConfirmModalModule,
    RouterModule.forChild(routes),
  ]
})
export class CarsModule { }
