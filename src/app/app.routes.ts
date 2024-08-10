import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'media',
        component: MediaComponent
    },
    {
        path: 'pages',
        component: PagesComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'settings',
        component: SettingComponent
    },
    {
        path:'login',
        component: LoginComponent
    }
];
