import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentTypesComponent } from './create-payment-types.component';

describe('CreatePaymentTypesComponent', () => {
  let component: CreatePaymentTypesComponent;
  let fixture: ComponentFixture<CreatePaymentTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePaymentTypesComponent]
    });
    fixture = TestBed.createComponent(CreatePaymentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
