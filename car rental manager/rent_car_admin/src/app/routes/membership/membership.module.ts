import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { RouterModule, Route } from '@angular/router';
import { ConfirmModalModule } from 'app/modals/confirm-modal/confirm-modal.module';


const routes: Route[] = [
  {
    path: '',
    component: MembershipComponent
  }
]

@NgModule({
  declarations: [MembershipComponent],
  imports: [
    CommonModule,
    ConfirmModalModule,
    RouterModule.forChild(routes)
  ]
})
export class MembershipModule { }
