import { Component } from '@angular/core';
import { Login } from '../../interfaces/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-services/login.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {
  loginForm!: FormGroup;
  user!: Login;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginServices: LoginService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginServices.login(this.loginForm.value).subscribe(
        (res: any) => {
          this.notificationService.showSuccessNotification(
            'Inicio de sesión exitoso! '
          );
          localStorage.setItem('token', res);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.notificationService.showErrorNotification(
            `Login Error: Email o contraseña incorrectos!`
          );
        }
      );
    } else {
      console.log('Invalid from data');
    }
  }
}
