import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layouts/clients/clients.module#ClientsModule'
    },
    // {
    //     path: 'login',
    //     loadChildren: './routes/login/login.module#LoginModule'
    // },
    // {
//     path: 'admin',
    //     canActivate: [AuthGuard],
    //     loadChildren: './layouts/admin/admin.module#AdminModule'
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }
