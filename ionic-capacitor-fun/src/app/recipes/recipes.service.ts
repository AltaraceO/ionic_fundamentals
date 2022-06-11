import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'schnitzel',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c6/Pasta_Pasta.jpg',
      ingredients: ['french fries', 'chicken', 'bread'],
    },
    {
      id: 'r2',
      title: 'pasta',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cc/Pasta_with_seafood_and_miuced_pork_with_mushroom_and_tomato_sauce_in_home.jpg',
      ingredients: ['french pasta', 'tomato', 'basil'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find((r) => r.id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((r) => r.id !== recipeId);
  }
}
