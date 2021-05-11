import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioDetailComponent } from './porfolio-detail.component';
import { HeadingModule } from 'src/app/components/heading/heading.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PorfolioDetailComponent],
  imports: [
    CommonModule,
    HeadingModule,
    RouterModule
  ],
  exports: [
    PorfolioDetailComponent
  ]
})
export class PorfolioDetailModule { }
