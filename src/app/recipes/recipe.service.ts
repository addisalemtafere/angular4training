import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
/**
 * Created by addis on 8/21/17.
 */

export class RecipeService {

  recipeSelected= new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe('first name testing', 'description', '../../../assets/img/favicon.ico'),
    new Recipe('This is testing', 'description', '../../../assets/img/diskclean.ico')
  ];

  getRecipes() {
   return this.recipes.slice();
  }
}
