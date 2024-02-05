// auth.guard.ts

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth-services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const token = this.authService.getToken();
    if(!token){
      return of(false)
    }
    const user = this.authService.getUser(token)
    console.log(user)
    if(!user){
      return of(false)
    }
    return of(true)
  }
}
