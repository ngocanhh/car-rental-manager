import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { Route, RouterModule } from '@angular/router';
import { ConfirmModalModule } from 'app/modals/confirm-modal/confirm-modal.module';
import { SafePipe } from 'app/pipe/safe.pipe';

const routes: Route[] = [
  {
    path: '',
    component: BrandComponent
  }
]

@NgModule({
  declarations: [BrandComponent, SafePipe],
  imports: [
    CommonModule,
    ConfirmModalModule,
    RouterModule.forChild(routes),
  ]
})
export class BrandModule { }
