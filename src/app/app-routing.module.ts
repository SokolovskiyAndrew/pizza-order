import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizzaOrderHomeComponent } from './feature/components';
import { PizzaListResolver, PizzeriasListResolver } from './feature/resolvers';

const routes: Routes = [
  {
    path: '',
    component: PizzaOrderHomeComponent,
    resolve: {
      pizzeriasList: PizzeriasListResolver,
      pizzaList: PizzaListResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
