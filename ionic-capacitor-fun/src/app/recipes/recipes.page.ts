import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'schnitzel',
      image: 'https://unsplash.com/photos/flFd8L7_B3g',
      ingredients: ['french fries', 'chicken', 'bread'],
    },
    {
      id: 'r2',
      title: 'pasta',
      image: 'url',
      ingredients: ['french pasta', 'tomato', 'basil'],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
