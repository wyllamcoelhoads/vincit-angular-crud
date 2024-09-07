import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'; // Importando o componente standalone
import { MoviesComponent } from './views/movies/movies.component';
import { FinanceComponent } from './views/finance/finance.component';
import { LogoutComponent } from './views/logout/logout.component';
import { SettingComponent } from './views/setting/setting.component';
import { MovieCreateComponent } from './components/movie/movie-create/movie-create.component';

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
        path: 'movies/create',
        component: MovieCreateComponent
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
        component: AbortController
    },
    
];
