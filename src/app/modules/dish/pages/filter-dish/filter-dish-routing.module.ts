import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterDishPage } from './filter-dish.page';

const routes: Routes = [
  {
    path: '',
    component: FilterDishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterDishPageRoutingModule {}
