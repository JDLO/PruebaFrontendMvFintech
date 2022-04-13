import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishViewPageRoutingModule } from './dish-view-routing.module';

import { DishViewPage } from './dish-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishViewPageRoutingModule
  ],
  declarations: [DishViewPage]
})
export class DishViewPageModule {}
