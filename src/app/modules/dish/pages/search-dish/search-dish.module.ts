import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDishPageRoutingModule } from './search-dish-routing.module';

import { SearchDishPage } from './search-dish.page';
import { SearchDishCardComponent } from '../../components/search-dish-card/search-dish-card.component';
import { PipesModule } from '../../pipes/pipes.module';
import { CartDishPage } from '../cart-dish/cart-dish.page';
import { FilterDishPage } from '../filter-dish/filter-dish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDishPageRoutingModule,
    PipesModule,
  ],
  declarations: [
    SearchDishPage,
    SearchDishCardComponent,
    CartDishPage,
    FilterDishPage
  ],
})
export class SearchDishPageModule {}
