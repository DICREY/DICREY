// Libraries
import { Routes } from '@angular/router';

// Imports
import { HomeComponent } from './pages/home/home.component';

// Component Routes
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
