import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit{
  public food_list: any[]; 
  constructor(private router: Router, private route: ActivatedRoute){
    this.food_list = [];
  }

  // lifecycle hook
  ngOnInit(): void{
    let temp_food_list = localStorage.getItem('food_list');
    
    if(temp_food_list){
      this.food_list = JSON.parse(temp_food_list);
    }
    console.log(this.food_list);
  }

  goToAddNewPage(){
    this.router.navigate(['admin/add-new']);
  }
}
