import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorieSelect",
  pure: false
})
export class CaloriePipe implements PipeTransform {

  transform(input: Meal[], args) {

    var desiredCalories = args[0];

    if (desiredCalories === "over500") {
      return input.filter(function(meal) {
        return meal.calories > 499;
      });
    } else if(desiredCalories === "under500") {
      return input.filter((meal) => {
        return meal.calories < 500;
      });
    } else {
      return input
    }
  }
}
