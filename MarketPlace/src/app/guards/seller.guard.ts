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
export class SellerGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}



  // SE PODRIA MEJORAR HACIENDO QUE EL AUTH GUARD SEA ASINCRONO DIRECAMENTE
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    const token = this.authService.getToken();
    if(!token){
      return false
    }
    const user = this.authService.getUser(token)
    if (user.type == 'Seller') {
      // El usuario es un vendedor, permite el acceso
      console.log('si es Seller');
      return true;
    } else {
      // El usuario no es un vendedor, redirige a una página de acceso denegado o a otra ubicación
      alert('NO ES SELLER');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
