import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Dish } from '../../model/dish';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-cart-dish',
  templateUrl: './cart-dish.page.html',
  styleUrls: ['./cart-dish.page.scss'],
})
export class CartDishPage implements OnInit {
  @Input()
  public dishes: Dish[];
  public total: number;

  constructor(
    private modalController: ModalController,
    private dishesService: DishesService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.totalDishesPrice();
  }

  public closeModal(){
    this.modalController.dismiss();
  }

  public totalDishesPrice(){
    this.total = this.dishesService.getTotalOf(this.dishes);
  }

  public remove(dish: Dish){
    this.dishes = this.dishesService.removeOneDishFrom(this.dishes, dish);
    this.totalDishesPrice();
    this.removeToast();
  }

  public async removeToast(){
    let toast = await this.toastController.create({
      message: 'Elemento eliminado al carrito',
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();
  }

}
