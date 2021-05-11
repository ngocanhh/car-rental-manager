import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBrandComponent } from './edit-brand.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmModalModule } from 'app/modals/confirm-modal/confirm-modal.module';

const routes: Route[] = [
  {
    path: ':id',
    component: EditBrandComponent
  }
]

@NgModule({
  declarations: [EditBrandComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ConfirmModalModule,
    MatSelectModule,
    ConfirmModalModule,
    RouterModule.forChild(routes),
  ]
})
export class EditBrandModule { }
