import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0LoginComponent } from './auth0-login.component';

describe('Auth0LoginComponent', () => {
  let component: Auth0LoginComponent;
  let fixture: ComponentFixture<Auth0LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Auth0LoginComponent]
    });
    fixture = TestBed.createComponent(Auth0LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
