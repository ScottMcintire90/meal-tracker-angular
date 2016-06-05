import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriePipe],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  template:`
    <div class="col-md-6 mealList">
      <label>Filter By Calories</label>
      <select (change)="onChange($event.target.value)" class="filter">
        <option value="all">All Meals</option>
        <option value="under500">Meals under 500 calories</option>
        <option value="over500">Meals over 500 calories</option>
      </select>
      <meal-display *ngFor="#currentMeal of mealList | calorieSelect:filterCalorie"
        (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal"
        [meal]="currentMeal" [mealList]="mealList">
      </meal-display>
      <h2>Total Calories</h2>
      <button class="btn-success btn"(click)="totalCalories()">Calculate Total Calories:</button>
      <h3>{{totalCals}}</h3>
    </div>

      <div class="col-md-6 addMeal">
        <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
      </div>
      <div *ngIf="selectedMeal" class="col-md-6 editMeal">
        <edit-meal [meal]="selectedMeal"></edit-meal>
      </div>

  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalorie: string="all";
  public totalCals: number = 0;

  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  createMeal(meal: Meal): void {
    this.mealList.push(meal);
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  onChange(filterOption) {
    this.filterCalorie = filterOption;
  }
  totalCalories(): void {
    this.totalCals = 0;
    var copyThis = this;
    this.mealList.forEach(function(meal) {
      copyThis.totalCals = meal.calories + copyThis.totalCals;
      console.log(copyThis.totalCals);
    });
  }
}
