import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallproductbyuserComponent } from './viewallproductbyuser.component';

describe('ViewallproductbyuserComponent', () => {
  let component: ViewallproductbyuserComponent;
  let fixture: ComponentFixture<ViewallproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallproductbyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
