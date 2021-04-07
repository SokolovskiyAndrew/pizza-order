import { Component, OnInit } from '@angular/core';
import {
  FinalOrderInterface,
  PizzaItemInterface,
  PizzaOrderInterface,
  PizzeriaItemInterface
} from '../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { UnsubscriberDirective } from '../../classes';
import { FormControl, Validators } from '@angular/forms';
import { PizzaOrderHelperService } from '../../services';

@Component({
  selector: 'app-pizza-order-home',
  templateUrl: './pizza-order-home.component.html',
  styleUrls: ['./pizza-order-home.component.scss']
})
export class PizzaOrderHomeComponent extends UnsubscriberDirective implements OnInit {
  selectFormControl: FormControl;

  pizzeriasList: PizzeriaItemInterface[];
  pizzaList: PizzaItemInterface[];
  currentPizzaList: PizzaItemInterface[];
  pizzaListOrder: PizzaOrderInterface[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private pizzaOrderHelperService: PizzaOrderHelperService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getRouteData();
  }

  addQuantity(pizzaId: number): void {
    this.currentPizzaList = this.currentPizzaList.map((pizza) => {
      if (pizza.id === pizzaId) {
        pizza.quantityCount++;
      }

      return pizza;
    });
  }

  removeQuantity(pizzaId: number): void {
    this.currentPizzaList = this.currentPizzaList.map((pizza) => {
      if (pizza.id === pizzaId) {
        pizza.quantityCount--;
      }

      return pizza;
    });
  }

  addPizzaToOrder(pizzaId: number): void {
    const foundPizza: PizzaItemInterface = this.currentPizzaList.find((pizza) => pizza.id === pizzaId);

    this.pizzaListOrder.push({
      pizza_id: foundPizza.id,
      tax: this.pizzaOrderHelperService.calculateTax(foundPizza),
      subtotal: this.pizzaOrderHelperService.calculateSubtotal(foundPizza),
      total: this.pizzaOrderHelperService.calculateTotal(),
      quantity: foundPizza.quantityCount
    });
  }

  makeOrder(): void {
    const finalOrder: FinalOrderInterface = {
      pizzeria_id: this.selectFormControl.value,
      pizza_items: this.pizzaListOrder,
      subtotal: this.pizzaOrderHelperService.calculateSubtotalSum(this.pizzaListOrder),
      tax: this.pizzaOrderHelperService.calculateTaxSum(this.pizzaListOrder),
      total: this.pizzaOrderHelperService.calculateTotalSum(this.pizzaListOrder)
    };

    console.log(finalOrder);
  }

  private getRouteData(): void {
    this.activatedRoute.data.pipe(takeUntil(this.destroy$)).subscribe((routeData) => {
      this.pizzeriasList = routeData.pizzeriasList;
      this.pizzaList = routeData.pizzaList.map((pizza) => {
        return {
          ...pizza,
          quantityCount: 1
        };
      });

      this.initSelectFormControl();
    });
  }

  private initSelectFormControl(): void {
    this.selectFormControl = new FormControl(null, [Validators.required]);

    this.selectFormControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((selectValue) => {
      this.currentPizzaList = this.pizzaList.filter((pizza) => {
        return this.findIsPizzaAvailableInPizzeria(selectValue, pizza);
      });
    });
  }

  private findIsPizzaAvailableInPizzeria(
    currentPizzeriaCount: number,
    pizzaItem: PizzaItemInterface
  ): boolean {
    return pizzaItem.available_in_pizzerias.some((pizza) => pizza === currentPizzeriaCount + 1);
  }
}
