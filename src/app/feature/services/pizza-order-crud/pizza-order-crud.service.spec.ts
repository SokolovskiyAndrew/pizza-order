import { TestBed } from '@angular/core/testing';

import { PizzaOrderCrudService } from './pizza-order-crud.service';

describe('PizzaOrderCrudService', () => {
  let service: PizzaOrderCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaOrderCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
