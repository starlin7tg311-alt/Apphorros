import { Routes } from '@angular/router';

// Las 3 pantallas de la app (carga diferida)
export const routes: Routes = [
  { path: '', redirectTo: 'calendario', pathMatch: 'full' },
  {
    path: 'calendario',
    loadComponent: () => import('./interfaces/calendario/calendario.page').then((m) => m.CalendarioPage),
  },
  {
    path: 'detalles',
    loadComponent: () => import('./interfaces/detalles/detalles.page').then((m) => m.DetallesPage),
  },
  {
    path: 'metas',
    loadComponent: () => import('./interfaces/metas/metas.page').then((m) => m.MetasPage),
  },
];
