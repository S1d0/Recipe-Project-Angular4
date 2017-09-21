import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Schnizel',
      'This is simply a test',
      'http://m.ocdn.eu/_m/828f8b3f1410e2e8cd1b8ae08558576a,51,1,0-20-1000-627-0.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Hamburger',
      'This is simply a test',
      'https://static.comicvine.com/uploads/scale_small/2/28140/1561271-hamburger.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ])
  ];

  getRecipes() {
    return this.recipes.slice(); // return new array that is copy of recipes
  }
}
