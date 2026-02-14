// Libraries
import { Routes } from '@angular/router';

// Imports
import { HomeComponent } from './pages/home/home.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

// Component Routes
export const routes: Routes = [
  {
    path: 'sobre-mi',
    component: SobreMiComponent,
    title: 'Sobre mí'
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    title: 'Contacto'
  },
  {
    path: 'proyectos',
    component: ProyectosComponent,
    title: 'Proyectos'
  },
  {
    path: '**',
    redirectTo: 'sobre-mi'
  }
];
