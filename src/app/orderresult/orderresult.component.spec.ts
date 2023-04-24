import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderresultComponent } from './orderresult.component';

describe('OrderresultComponent', () => {
  let component: OrderresultComponent;
  let fixture: ComponentFixture<OrderresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
