import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Dish } from '../../model/dish';
import { DishesService } from '../../services/dishes.service';
import { CartDishPage } from '../cart-dish/cart-dish.page';
import { FilterDishPage } from '../filter-dish/filter-dish.page';

@Component({
  selector: 'app-search-dish',
  templateUrl: './search-dish.page.html',
  styleUrls: ['./search-dish.page.scss'],
})
export class SearchDishPage implements OnInit {
  public dishes: Dish[];
  public searchText: string = '';
  public filterDishes: any;
  public dishesToCart: Dish[] = [];
  public total: number;

  constructor(
    public dishesService: DishesService,
    private modalController: ModalController,
    private toastController: ToastController
  ) { }
  ngOnInit() {
    this.load();
  }

  public async load() {
    this.dishes = await this.dishesService.getAllDishes();
  }

  public search(data: any){
    this.searchText = data.detail.value;
  }

  public addDish(dish: Dish){
    this.dishesToCart.push(dish);
    this.toastSuccesfull();
  }

  public amountElementInCart(){
  }

  public async toastSuccesfull(){
    let toast = await this.toastController.create({
      message: 'Elemento agregado al carrito',
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();
  }
  
  public async filterModal(){
    const modal = await this.modalController.create({
      component: FilterDishPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
    });
    modal.onDidDismiss().then(data => {
      this.filterDishes = data;
    });
    await modal.present();
  }

  public async cartModal(){
    const dishes = this.dishesToCart;
    const modal = await this.modalController.create({
      component: CartDishPage,
      componentProps: {
        dishes
      },
    });
    await modal.present();
  }
}
