import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
// import { EditMealDetailsComponent } from './edit-meal-details.component';
// import { CaloricPipe } from './caloric.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  // pipes: [caloricPipe],
  directives: [MealComponent, NewMealComponent],
  template:`
    <div class="col-md-6 mealList">
      <meal-display *ngFor="#currentMeal of mealList"
        (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal"
        [meal]="currentMeal" [mealList]="mealList">
      </meal-display>
    </div>
    <div class="col-md-6 addEdit">
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;

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
  // onChange(filterOption) {
  //   this.filterCarolie = filterOption;
  // }
}
