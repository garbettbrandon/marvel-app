import { Routes } from '@angular/router';
import { MarvelFrontLayoutComponent } from './layouts/marvel-front-layout/marvel-front-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { FavPageComponent } from './pages/fav-page/fav-page.component';

export const marvelFrontRoutes: Routes = [
  {
    path: '',
    component: MarvelFrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },

      {
        path: 'fav',
        component: FavPageComponent,
      },

      {
        path: 'detail/:id',
        component: DetailPageComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];

export default marvelFrontRoutes;
