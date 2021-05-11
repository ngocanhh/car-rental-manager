import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './check-out.component';
import { RouterModule, Routes } from '@angular/router';
import { HeadingModule } from 'src/app/components/heading/heading.module';

const routes: Routes = [
  {
      path: '',
      component: CheckOutComponent
  }
];

@NgModule({
  declarations: [CheckOutComponent],
  imports: [
    CommonModule,
    HeadingModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CheckOutComponent
  ]
})
export class CheckOutModule { }
