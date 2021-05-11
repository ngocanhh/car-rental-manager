import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
    {
        path: '',
        component: ClientsComponent,
        children: [
            {
                path: '',
                loadChildren: '../../routes/home/home.module#HomeModule'
            },
            {
                path: 'check-out',
                loadChildren: '../../routes/check-out/check-out.module#CheckOutModule'
            },
            {
                path: 'porfolio',
                loadChildren: '../../routes/porfolio/porfolio.module#PorfolioModule'
            },
            {
                path: 'about-me',
                loadChildren: '../../routes/about-me/about-me.module#AboutMeModule'
            },
            {
                path: 'booking',
                loadChildren: '../../routes/booking/booking.module#BookingModule'
            },
            {
                path: 'contracts',
                loadChildren: '../../routes/contracts/contracts.module#ContractsModule'
            },
            {
                path: 'cars',
                loadChildren: '../../routes/cars/cars.module#CarsModule'
            },
        ]
    },
    {
        path: 'login',
        loadChildren: '../../routes/login/login.module#LoginModule'
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class ClientsRoutingModule { }
