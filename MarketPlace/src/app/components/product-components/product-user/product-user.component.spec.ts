import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUserComponent } from './product-user.component';

describe('ProductUserComponent', () => {
  let component: ProductUserComponent;
  let fixture: ComponentFixture<ProductUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductUserComponent],
    });
    fixture = TestBed.createComponent(ProductUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
