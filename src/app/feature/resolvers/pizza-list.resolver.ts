import { Resolve } from '@angular/router';
import { PizzaItemInterface } from '../interfaces';
import { PizzaOrderCrudService } from '../services';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PizzaListResolver implements Resolve<PizzaItemInterface[]> {
  constructor(private pizzaOrderCrudService: PizzaOrderCrudService) {}

  resolve(): Observable<PizzaItemInterface[]> {
    return this.pizzaOrderCrudService.getPizzaList();
  }
}
