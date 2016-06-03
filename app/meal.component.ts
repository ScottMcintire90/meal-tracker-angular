import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal', 'mealList'],
  template: `
    <h3>{{ meal.name }}</h3>
      <ul class="mealDetails">
        <p><strong>Name: </strong>{{ meal.name }}</p>
        <p><strong>Details: </strong>{{ meal.details }}</p>
        <p><strong>Calories: </strong>{{ meal.calories }}</p>
      </ul>
  `
})
export class MealComponent {
  public meal: Meal;
  public mealList: Meal[];

}
