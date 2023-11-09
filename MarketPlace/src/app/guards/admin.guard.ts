import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth-services/auth.service'; // Supongamos que tienes un servicio de autenticación
import { filter, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  waitForUsername(): Promise<any> {
    return new Promise((resolve) => {
      this.authService.user$
        .pipe(
          // Filtrar valores nulos o undefined
          filter((user) => user !== null && user !== undefined),
          // Tomar el primer valor que cumpla con el filtro
          first(),
        )
        .subscribe((user) => {
          resolve(user);
        });
    });
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    const user = await this.waitForUsername();
    if (user.type == 'Admin') {
      // El usuario es un vendedor, permite el acceso
      console.log('si es Admin');
      return true;
    } else {
      // El usuario no es un vendedor, redirige a una página de acceso denegado o a otra ubicación
      alert('NO ES ADMIN');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
