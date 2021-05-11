import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { TextAnimateModule } from 'src/app/components/text-animate/text-animate.module';
import { IntroAnimateModule } from 'src/app/components/intro-animate/intro-animate.module';
import { BlogCarouselModule } from 'src/app/components/blog-carousel/blog-carousel.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TextAnimateModule,
    IntroAnimateModule,
    RouterModule,
    BlogCarouselModule
  ]
})
export class HomeModule { }
