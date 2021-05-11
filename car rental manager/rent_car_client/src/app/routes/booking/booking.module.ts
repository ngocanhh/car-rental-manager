import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { Route, RouterModule } from '@angular/router';
import { HeadingModule } from 'src/app/components/heading/heading.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Route[] = [
  {
    path: ':carId',
    component: BookingComponent
  }
]

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    HeadingModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BookingComponent
  ]
})
export class BookingModule { }
