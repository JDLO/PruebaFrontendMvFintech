import { Pipe, PipeTransform } from '@angular/core';
import { Dish } from '../model/dish';

@Pipe({
  name: 'searchDishes'
})
export class SearchDishesPipe implements PipeTransform {

  transform(array: Dish[], 
            text: string,
            name: string,
            categorie?: string, 
            price?: string): Dish[] {

    if (text == ''){
      return array;
    }

    const result = [];

    text = text.toLocaleLowerCase();

    for(const dish of array){
      if(dish[name].toLocaleLowerCase().includes(text))
        result.push(dish);
    }

    return result;
  }

}
