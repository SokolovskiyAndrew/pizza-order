import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOrderHomeComponent } from './pizza-order-home.component';

describe('PizzaOrderHomeComponent', () => {
  let component: PizzaOrderHomeComponent;
  let fixture: ComponentFixture<PizzaOrderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaOrderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOrderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
