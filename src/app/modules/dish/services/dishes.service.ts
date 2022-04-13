import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dish } from '../model/dish';
import { DataBase } from '../model/database';
import { Categorie } from '../model/categorie';
import { element } from 'protractor';
import { totalmem } from 'os';

@Injectable({
  providedIn: 'root'
})

export class DishesService {
  public url: string = '../../assets/jsPruebaFrontend.json';
  public data: DataBase;
  public categories: Categorie[];
  
  public modelConstructor(data){
    return new DataBase(data);
  }
  
  public getData(): Promise<DataBase>{
    return this.httpClient.get<DataBase>(this.url)
    .toPromise()
    .then(response => this.modelConstructor(response));
  }

  public async getAllCategories(): Promise<Categorie[]>{
    this.data = await this.getData();
    return this.data.categories
  }

  public getOneCategorie(id): Categorie{
    let valueReturn = id;
    this.categories.forEach(element => {
      if (element.categori_id === id){
        valueReturn = element;
      }
    });
    return valueReturn;
  }
  
  public async getAllDishes(): Promise<Dish[]>{
    this.data = await this.getData();
    this.categories = this.data.categories
    this.data.products.forEach(element => {
      element.categories.forEach(categorie => {
        let categ = this.getOneCategorie(categorie);  
        let position = element.categories.indexOf(categorie);
        element.categories[position] = categ;
      });
    });
    return this.data.products;
  }

  public getTotalOf(dishes: Dish[]): number{
    let total = 0;
    dishes.forEach(element => {
      let price = element.price.replace(/\./g, "");
      total = total + Number(price);
    });
    return total;
  }

  public removeOneDishFrom(dishes, dish){
    let index = dishes.indexOf(dish);
    if (index > -1) {
      dishes.splice(index, 1);
    }
    return dishes;
  }

  constructor(
    protected httpClient: HttpClient
  ) {}
}
