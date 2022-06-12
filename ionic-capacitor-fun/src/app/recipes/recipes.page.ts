import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage {
  recipes: Recipe[];

  constructor(private recipeService: RecipesService) {}
  //instead of ngOnInit... this will trigger the re-render - if you navigate with Router ngOnInit doesnt work
  ionViewWillEnter() {
    this.recipes = this.recipeService.getAllRecipes();
  }
}
