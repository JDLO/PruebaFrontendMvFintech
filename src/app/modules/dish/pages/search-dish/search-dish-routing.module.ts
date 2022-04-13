import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDishPage } from './search-dish.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDishPageRoutingModule {}
