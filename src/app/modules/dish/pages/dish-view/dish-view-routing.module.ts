import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishViewPage } from './dish-view.page';

const routes: Routes = [
  {
    path: '',
    component: DishViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishViewPageRoutingModule {}
