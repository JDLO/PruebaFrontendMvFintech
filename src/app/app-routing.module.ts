import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'search-dish',
    pathMatch: 'full'
  },
  {
    path: 'search-dish',
    loadChildren: () => import('./modules/dish/pages/search-dish/search-dish.module').then( m => m.SearchDishPageModule)
  },
  {
    path: 'dish-view',
    loadChildren: () => import('./modules/dish/pages/dish-view/dish-view.module').then( m => m.DishViewPageModule)
  },
  {
    path: 'filter-dish',
    loadChildren: () => import('./modules/dish/pages/filter-dish/filter-dish.module').then( m => m.FilterDishPageModule)
  },
  {
    path: 'cart-dish',
    loadChildren: () => import('./modules/dish/pages/cart-dish/cart-dish.module').then( m => m.CartDishPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
