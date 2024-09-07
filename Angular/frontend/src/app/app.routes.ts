import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'; // Importando o componente standalone
import { MoviesComponent } from './views/movies/movies.component';
import { AboutComponent } from './views/about/about.component';
import { FinanceComponent } from './views/finance/finance.component';
import { LogoutComponent } from './views/logout/logout.component';
import { SettingComponent } from './views/setting/setting.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent // Não precisa ser declarado no NgModule, pois é standalone
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'finance',
        component: FinanceComponent
    },
    {
        path: 'setting',
        component: SettingComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    
];
