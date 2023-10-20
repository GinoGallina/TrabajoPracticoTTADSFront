import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaymentTypesComponent } from './edit-payment-types.component';

describe('EditPaymentTypesComponent', () => {
  let component: EditPaymentTypesComponent;
  let fixture: ComponentFixture<EditPaymentTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPaymentTypesComponent]
    });
    fixture = TestBed.createComponent(EditPaymentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
