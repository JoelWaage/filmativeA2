import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { FilmsComponent } from './components/films.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'films',
    component: FilmsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
