import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCarComponent } from './edit-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { ConfirmModalModule } from 'app/modals/confirm-modal/confirm-modal.module';

const routes: Route[] = [
  {
    path: ':id',
    component: EditCarComponent
  }
]

@NgModule({
  declarations: [EditCarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ConfirmModalModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ]
})
export class EditCarModule { }
