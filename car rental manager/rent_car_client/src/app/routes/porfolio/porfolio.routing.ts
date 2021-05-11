import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioComponent } from './porfolio.component';
import { PorfolioDetailComponent } from '../porfolio-detail/porfolio-detail.component';


const routes: Routes = [
    {
        path: '',
        component: PorfolioComponent
    },
    {
        path: ':id',
        component: PorfolioDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class PorfolioRoutingModule { }
