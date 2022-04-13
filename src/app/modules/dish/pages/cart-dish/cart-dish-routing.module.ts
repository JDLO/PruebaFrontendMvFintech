import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartDishPage } from './cart-dish.page';

const routes: Routes = [
  {
    path: '',
    component: CartDishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartDishPageRoutingModule {}
