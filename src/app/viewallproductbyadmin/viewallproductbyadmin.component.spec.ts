import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallproductbyadminComponent } from './viewallproductbyadmin.component';

describe('ViewallproductbyadminComponent', () => {
  let component: ViewallproductbyadminComponent;
  let fixture: ComponentFixture<ViewallproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallproductbyadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
