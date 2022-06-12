import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private router: Router,
    private alertCtrl: AlertController
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
    //this creates a promise so need to use a present( ) at the end to make it run ... if clicked ok than the handler runs the rest
    this.alertCtrl
      .create({
        header: 'Are you ok?',
        message: 'Do you really wanna delete this?',
        buttons: [
          { text: 'Oh, God no', role: 'cancel' },
          {
            text: 'Ahh, yeah?',
            handler: () => {
              this.recipesService.deleteRecipe(this.gottenRecipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alertElement) => {
        alertElement.present();
      });
  }
}
