// auth.guard.ts

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../services/auth-services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      const rtaObservable$: Observable<boolean> = of(true);
      return rtaObservable$;
    }
    return this.authService.isTokenValid().pipe(
      switchMap((isValid) => {
        if (!isValid) {
          return of(true); // Devuelve false si no está logueado
        }

        this.router.navigate(['/home']);
        return of(true);
      })
    );
  }
}
