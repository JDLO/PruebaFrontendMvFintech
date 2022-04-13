import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from '../model/categorie';
import { Dish } from '../model/dish';

@Pipe({
  name: 'filterDish'
})
export class FilterDishPipe implements PipeTransform {

  transform(
          array: Dish[], 
          value: any,
          price?: string,
          categories?: string,
          avilable?: string,
          best_seller?: boolean): Dish[] {

    if(value == undefined){
      return array;
    }let result = [];

    for(const dish of array){
      let priceDish = dish[price].replace(/\./g, "");
      if (value.data.value1 != undefined){
        if(Number(priceDish) >= value.data.value1){
          result.push(dish);
        }
      }
      if(value.data.value2 != undefined){
        if (Number(priceDish) <= value.data.value2){
          result.push(dish);
        }
      }

      //-- here start to comparate all types of food for the dishes----
      if(value.data.value1 != undefined){
        if(value.data.value1 == 'drinks'){
          dish.categories.forEach(element => {
            if(element.name == value.data.value1){
              result.push(dish)
            }
          });
        }
      }
      if(value.data.value1 != undefined){
        if(value.data.value1 == 'food'){
          dish.categories.forEach(element => {
            if(element.name == value.data.value1){
              result.push(dish)
            }
          });
        }
      }
      if(value.data.value1 != undefined){
        if(value.data.value1 == 'lunch'){
          dish.categories.forEach(element => {
            if(element.name == value.data.value1){
              result.push(dish)
            }
          });
        }
      }
      if(value.data.value1 != undefined){
        if(value.data.value1 == 'sea'){
          dish.categories.forEach(element => {
            if(element.name == value.data.value1){
              result.push(dish)
            }
          });
        }
      }

      //------ here check best seler dishes ------
      if(value.data.value1 != undefined){
        if(value.data.value1 == 'best_seller'){
          if(dish.best_seller == value.data.value2){
            result.push(dish)
          }
        }
      }

      if (value.data.value1 != undefined){
        if(value.data.value1 == 'available'){
          if(dish.available == value.data.value2){
            result.push(dish)
          }
        }
      }
    }
    
    //---- sort dishes ---
    if(value.data.value1 == 'name'){
      if(value.data.value2 == true){
        result = array.sort((a,b) => {
          if(a.name > b.name){
            return 1;
          }
          if(a.name < b.name) {
            return -1;
          }
          return 0;
        })
      }
    }
    if(value.data.value1 == 'name'){
      if(value.data.value2 == false){
        result = array.sort((a,b) => {
          if(a.name < b.name){
            return 1;
          }
          if(a.name > b.name) {
            return -1;
          }
          return 0;
        });
      }
    }

    if(value.data.value1 == 'price'){
      if(value.data.value2 == true){
        result = array.sort((a,b) => {
          let aPrice = a.price.replace(/\./g, "");
          let bPrice = b.price.replace(/\./g, "");
          if(Number(aPrice) < Number(bPrice)){
            return 1;
          }
          if(Number(aPrice) > Number(bPrice)) {
            return -1;
          }
          return 0;
        })
      }
    }
    if(value.data.value1 == 'price'){
      if(value.data.value2 == false){ 
        result = array.sort((a,b) => {
          let aPrice = a.price.replace(/\./g, "");
          let bPrice = b.price.replace(/\./g, "");
          if(Number(aPrice) > Number(bPrice)){
            return 1;
          }
          if(Number(aPrice) < Number(bPrice)) {
            return -1;
          }
          return 0;
        });
      }
    }

    return result;
  }

}
