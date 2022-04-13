import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-dish',
  templateUrl: './filter-dish.page.html',
  styleUrls: ['./filter-dish.page.scss'],
})
export class FilterDishPage implements OnInit {
  @Input()
  public data: any;
  public lower: number;
  public higher: string;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public filterSort(data, boolean){
    this.fillData(data, boolean);
    this.closeModal();
  }

  public filterAvailable(data){
    this.fillData('available', data);
    this.closeModal();
  }

  public filterType(data){
    this.fillData(data, true);
    this.closeModal();
  }

  public filterButton(){
    this.fillData(this.lower, this.higher);
    this.closeModal();
  }

  public clearFilter(){
    this.fillData(0, undefined);
    this.closeModal();
  }
  
  private fillData(data1, data2){
    this.data = {
      value1: data1,
      value2: data2
    }
  }

  public closeModal(){
    this.modalController.dismiss(this.data);
  }

}
