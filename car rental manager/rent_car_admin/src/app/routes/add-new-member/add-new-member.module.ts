import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewMemberComponent } from './add-new-member.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


const routes: Route[] = [
  {
    path: '',
    component: AddNewMemberComponent
  }
]

@NgModule({
  declarations: [AddNewMemberComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ]
})
export class AddNewMemberModule { }
