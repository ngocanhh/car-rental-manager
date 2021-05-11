import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioComponent } from './porfolio.component';
import { PorfolioRoutingModule } from './porfolio.routing';
import { WorkCardModule } from 'src/app/components/work-card/work-card.module';
import { PorfolioDetailModule } from '../porfolio-detail/porfolio-detail.module';
import { HeadingModule } from 'src/app/components/heading/heading.module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [PorfolioComponent],
  imports: [
    CommonModule,
    PorfolioRoutingModule,
    WorkCardModule,
    PorfolioDetailModule,
    HeadingModule,
    NgxPaginationModule
  ]
})
export class PorfolioModule { }
