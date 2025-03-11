import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./marvel-front/marvel-front.routes'),
  },
];
