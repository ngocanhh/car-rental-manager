import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditMemberComponent } from './edit-member.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { ConfirmModalModule } from 'app/modals/confirm-modal/confirm-modal.module';

const routes: Route[] = [
  {
    path: ':id',
    component: EditMemberComponent
  }
]

@NgModule({
  declarations: [EditMemberComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ConfirmModalModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ]
})
export class EditMemberModule { }
