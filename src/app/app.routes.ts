import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FeaturedComponent } from '../pages/featured/featured.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'featured',
    component: FeaturedComponent,
  },
];
