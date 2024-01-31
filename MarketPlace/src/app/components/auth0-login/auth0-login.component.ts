import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth0-login',
  templateUrl: './auth0-login.component.html',
  styleUrls: ['./auth0-login.component.css'],
})
export class Auth0LoginComponent {
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthtenticated) => {
      console.log(isAuthtenticated);
    });
    this.auth.user$.subscribe((isAuthtenticated) => {
      console.log(isAuthtenticated);
    });
    this.auth.error$.subscribe((error) => {
      console.error('Auth Error:', error);
    });
  }
  loginWithAut0() {
    this.auth.loginWithRedirect();
  }
}
