import { TestBed } from '@angular/core/testing';

import { PizzaOrderHelperService } from './pizza-order-helper.service';

describe('PizzaOrderHelperService', () => {
  let service: PizzaOrderHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaOrderHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
