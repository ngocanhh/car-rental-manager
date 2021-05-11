import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportationComponent } from './transportation.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: "",
    component: TransportationComponent
  }
]

@NgModule({
  declarations: [TransportationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TransportationModule { }
