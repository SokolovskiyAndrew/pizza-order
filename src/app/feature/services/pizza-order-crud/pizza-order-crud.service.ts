import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PizzaItemInterface, PizzeriaItemInterface } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PizzaOrderCrudService {
  private readonly url = 'assets/mock-data';

  constructor(private httpClient: HttpClient) {}

  getPizzaList(): Observable<PizzaItemInterface[]> {
    return this.httpClient.get<PizzaItemInterface[]>(
      `${this.url}/pizzas-list.json`
    );
  }

  getPizzeriasList(): Observable<PizzeriaItemInterface[]> {
    return this.httpClient.get<PizzeriaItemInterface[]>(
      `${this.url}/pizzerias-list.json`
    );
  }
}
