import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template:`
  <div class="edit-form">
    <h3>Edit Meal Details</h3>
      <label class="col-sm-6" for="mealName">Name</label><input class="col-sm-6 input-lg edit-form" [(ngModel)]="meal.name">
      <label class="col-sm-6" for="mealDetails">Details</label><input class="col-sm-6 input-lg edit-form" [(ngModel)]="meal.details">
      <label class="col-sm-6" for="mealCalories">Calories</label><input class="col-sm-6 input-lg edit-form" [(ngModel)]="meal.calories">
  </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
