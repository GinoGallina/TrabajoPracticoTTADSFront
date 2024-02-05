import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { NotificationService } from 'src/app/services/notification-services/notification.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-services/login.service';

@Component({
  selector: 'app-auth0-login',
  templateUrl: './auth0-login.component.html',
  styleUrls: ['./auth0-login.component.css'],
})
export class Auth0LoginComponent {
  constructor(
    public auth: AuthService,
    private loginService: LoginService, // Ensure the variable name matches the import statement
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.auth.idTokenClaims$.subscribe((token: any) => {
          this.loginService.loginWithAuth(token.__raw).subscribe(
            (res: any) => {
              this.notificationService.showSuccessNotification(
                'Inicio de sesión exitoso!'
              );
              localStorage.setItem('token', res);
              this.router.navigate(['/home']);
            },
            (error: any) => {
              this.notificationService.showErrorNotification(
                `Login Error: Email o contraseña incorrectos!`
              );
            }
          );
        });
      }
    });
  }
  loginWithAut0() {
    this.auth.loginWithRedirect();
  }
}
