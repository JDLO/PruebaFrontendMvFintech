import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterDishPageRoutingModule } from './filter-dish-routing.module';

import { FilterDishPage } from './filter-dish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterDishPageRoutingModule
  ],
  declarations: [FilterDishPage]
})
export class FilterDishPageModule {}
