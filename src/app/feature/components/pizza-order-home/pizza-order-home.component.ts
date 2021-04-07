import { Component, OnInit } from '@angular/core';
import { PizzaItemInterface, PizzeriaItemInterface } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { UnsubscriberDirective } from '../../classes';

@Component({
  selector: 'app-pizza-order-home',
  templateUrl: './pizza-order-home.component.html',
  styleUrls: ['./pizza-order-home.component.scss'],
})
export class PizzaOrderHomeComponent
  extends UnsubscriberDirective
  implements OnInit {
  pizzeriasList: PizzeriaItemInterface[];
  pizzaList: PizzaItemInterface[];

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.getRouteData();
  }

  getRouteData(): void {
    this.activatedRoute.data
      .pipe(takeUntil(this.destroy$))
      .subscribe((routeData) => {
        this.pizzeriasList = routeData.pizzeriasList;
        this.pizzaList = routeData.pizzaList;
      });
  }
}
