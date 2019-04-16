import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CombinationsComponent } from './component/combinations.component';
import { OwnCombinationComponent } from './component/own-combination/own-combination.component';
import { AboutCombinationComponent } from './component/about-combination/about-combination.component';
import { InfoComponent } from './component/about-combination/info/info.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { RecipeComponent } from './component/recipe/recipe.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'combinations/about', redirectTo: '/combinations/about/1/vitamins', pathMatch: 'full'  },
      {
        path: 'combinations',
        component: CombinationsComponent,
        children: [
          {
            path: 'about/:id',
            component: AboutCombinationComponent,
            children: [
              { path: 'vitamins', component: InfoComponent },
              { path: 'minerals', component: InfoComponent },
              { path: 'amino-acids', component: InfoComponent },
            ]
          },
          { path: 'own-combination', component: OwnCombinationComponent },
          { path: 'recipes/:id', component: RecipesComponent },
          { path: 'recipe/:id', component: RecipeComponent }
        ]
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CombinationsRoutingModule {}
