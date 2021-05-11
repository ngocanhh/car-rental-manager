import { Routes } from '@angular/router';

import { DashboardComponent } from '../../demo/dashboard/dashboard.component';
import { UserProfileComponent } from '../../demo/user-profile/user-profile.component';
import { TableListComponent } from '../../demo/table-list/table-list.component';
import { TypographyComponent } from '../../demo/typography/typography.component';
import { IconsComponent } from '../../demo/icons/icons.component';
import { MapsComponent } from '../../demo/maps/maps.component';
import { NotificationsComponent } from '../../demo/notifications/notifications.component';
import { UpgradeComponent } from '../../demo/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    {
        path: 'transportation',
        loadChildren: () => import('../../routes/transportation/transportation.module').then(m => m.TransportationModule)
    },
    {
        path: 'membership',
        loadChildren: () => import('../../routes/membership/membership.module').then(m => m.MembershipModule)
    },
    {
        path: 'brand',
        loadChildren: () => import('../../routes/brand/brand.module').then(m => m.BrandModule)
    },
    {
        path: 'car',
        loadChildren: () => import('../../routes/car/car.module').then(m => m.CarModule)
    },
    {
        path: 'add-new-member',
        loadChildren: () => import('../../routes/add-new-member/add-new-member.module').then(m => m.AddNewMemberModule)
    },
    {
        path: 'add-new-car',
        loadChildren: () => import('../../routes/add-new-car/add-new-car.module').then(m => m.AddNewCarModule)
    },
    {
        path: 'add-new-brand',
        loadChildren: () => import('../../routes/add-new-brand/add-new-brand.module').then(m => m.AddNewBrandModule)
    },
    {
        path: 'edit-member',
        loadChildren: () => import('../../routes/edit-member/edit-member.module').then(m => m.EditMemberModule)
    },
    {
        path: 'edit-brand',
        loadChildren: () => import('../../routes/edit-brand/edit-brand.module').then(m => m.EditBrandModule)
    },
    {
        path: 'edit-car',
        loadChildren: () => import('../../routes/edit-car/edit-car.module').then(m => m.EditCarModule)
    },
];
