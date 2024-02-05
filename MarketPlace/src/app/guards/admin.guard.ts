import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth-services/auth.service'; // Supongamos que tienes un servicio de autenticación
import { filter, first, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}



  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    
    const token = this.authService.getToken();
    if(!token){
      return false
    }
    const user = this.authService.getUser(token)
    if (user.type == 'Admin') {
      // El usuario es un vendedor, permite el acceso
      return true;
    } else {
      // El usuario no es un vendedor, redirige a una página de acceso denegado o a otra ubicación
      alert('NO ES ADMIN');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
