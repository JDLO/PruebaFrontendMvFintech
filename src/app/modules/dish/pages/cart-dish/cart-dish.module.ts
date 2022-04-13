import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartDishPageRoutingModule } from './cart-dish-routing.module';

import { CartDishPage } from './cart-dish.page';
import { SearchDishCardComponent } from '../../components/search-dish-card/search-dish-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartDishPageRoutingModule
  ],
  declarations: [
    CartDishPage,
    SearchDishCardComponent
  ]
})
export class CartDishPageModule {}
