import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit{
  @Input('id')id!: number;
  public food_item: any;
  constructor (){
    this.food_item = null;
  }
  ngOnInit(): void {
    console.log(this.id);
    let temp_food_list = localStorage.getItem('food_list');
    let food_list = []
    if(temp_food_list){
      food_list = JSON.parse(temp_food_list);
    }
    if(this.id > -1)
      this.food_item = food_list[this.id];
  }

}
