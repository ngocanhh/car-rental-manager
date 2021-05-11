import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewCarComponent } from './add-new-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: AddNewCarComponent
  }
]

@NgModule({
  declarations: [AddNewCarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class AddNewCarModule { }
