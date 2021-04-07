import { Injectable } from '@angular/core';
import { PizzaItemInterface, PizzaOrderInterface } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PizzaOrderHelperService {
  private pizzaTax: number;
  private pizzaSubtotal: number;
  constructor() {}

  calculateTax(chosenPizza: PizzaItemInterface, tax = 8.25): number {
    this.pizzaTax = (+chosenPizza.price * chosenPizza.quantityCount * tax) / 100;

    return this.pizzaTax;
  }

  calculateSubtotal(chosenPizza: PizzaItemInterface): number {
    this.pizzaSubtotal = +chosenPizza.price * chosenPizza.quantityCount;

    return this.pizzaSubtotal;
  }

  calculateTotal(): number {
    return this.pizzaTax + this.pizzaSubtotal;
  }

  calculateTaxSum(pizzaOrderList: PizzaOrderInterface[]): number {
    return this.mapToOneArray('tax', pizzaOrderList);
  }

  calculateSubtotalSum(pizzaOrderList: PizzaOrderInterface[]): number {
    return this.mapToOneArray('subtotal', pizzaOrderList);
  }

  calculateTotalSum(pizzaOrderList: PizzaOrderInterface[]): number {
    return this.mapToOneArray('total', pizzaOrderList);
  }

  private mapToOneArray(filterCriteria: string, pizzaOrderList: PizzaOrderInterface[]): any {
    const filteredArray: number[] = pizzaOrderList.map((pizza) => {
      return pizza[filterCriteria];
    });

    return filteredArray.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }
}
