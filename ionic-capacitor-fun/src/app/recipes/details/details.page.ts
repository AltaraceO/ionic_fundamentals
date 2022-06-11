import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  gottenRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('details')) {
        //
        return;
      }
      const details = paramMap.get('details');
      this.gottenRecipe = this.recipesService.getRecipe(details);
    });
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.gottenRecipe.id);
    this.router.navigate(['/recipes']);
  }
}
