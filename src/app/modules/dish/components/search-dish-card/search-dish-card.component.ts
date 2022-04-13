import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../../model/dish';

@Component({
  selector: 'app-search-dish-card',
  templateUrl: './search-dish-card.component.html',
  styleUrls: ['./search-dish-card.component.scss'],
})
export class SearchDishCardComponent implements OnInit {
  @Input()
  public dish: Dish;
  @Input()
  public isCart: boolean;
  @Output()
  public addDish: EventEmitter<Dish> = new EventEmitter();
  @Output()
  public removeDish: EventEmitter<Dish> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public add(dish: Dish){
    this.addDish.emit(dish);
  }
  public remove(dish: Dish){
    this.removeDish.emit(dish);
  }
}
