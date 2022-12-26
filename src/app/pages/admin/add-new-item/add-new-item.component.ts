import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit{
  foodDetailsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.foodDetailsForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      category: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      price: [null, [Validators.required, Validators.min(10), Validators.max(5000)]],
      qnty: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
      dsc: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }
  ngOnInit(): void {}

  goBack(): void{
    this.router.navigate(['admin/listing'])
  }

  onFormDetilsSobmit(): void{
    console.log(this.foodDetailsForm.value);
    if(this.foodDetailsForm.valid) {
      let temp_food_list = localStorage.getItem('food_list');
      let food_list = [];
      if(temp_food_list){
        food_list = JSON.parse(temp_food_list);
      }
      food_list.push(this.foodDetailsForm.value);
      localStorage.setItem('food_list', JSON.stringify(food_list));
    }
  }
}
