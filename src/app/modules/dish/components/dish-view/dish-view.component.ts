import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../../model/dish';

@Component({
  selector: 'app-dish-view',
  templateUrl: './dish-view.component.html',
  styleUrls: ['./dish-view.component.scss'],
})
export class DishViewComponent implements OnInit {
  @Input()
  public dish: Dish;

  constructor() { }

  ngOnInit() {}

}
