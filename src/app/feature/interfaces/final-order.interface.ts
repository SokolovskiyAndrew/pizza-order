import { PizzaOrderInterface } from './pizza-order.interface';

export interface FinalOrderInterface {
  pizzeria_id: number;
  pizza_items: PizzaOrderInterface[];
  subtotal: number;
  tax: number;
  total: number;
}
