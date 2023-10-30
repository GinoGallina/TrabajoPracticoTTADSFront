// auth.guard.ts

import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth-services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.authService.isTokenValid().pipe(
            tap(isValid => {
                if (!isValid) {
                    // Redirigir a la página de inicio de sesión o mostrar un mensaje de error.
                    this.router.navigate(['/login']);
                }else{
                }
            })
        );
    }
}