import { Resolve } from '@angular/router';
import { PizzeriaItemInterface } from '../interfaces';
import { PizzaOrderCrudService } from '../services';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PizzeriasListResolver implements Resolve<PizzeriaItemInterface[]> {
  constructor(private pizzaOrderCrudService: PizzaOrderCrudService) {}

  resolve(): Observable<PizzeriaItemInterface[]> {
    return this.pizzaOrderCrudService.getPizzeriasList();
  }
}
