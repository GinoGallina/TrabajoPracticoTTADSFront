import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, of, map, catchError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrlAuth = 'http://localhost:1234/auth/validate-token';

  
  

  // USER COMO OBSERVABLE - (EN CADA PETICION)
  // private userSubject = new BehaviorSubject<string | null>(null);
  // user$ = this.userSubject.asObservable();


  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router,
    public auth: Auth0Service
  ) {}

  isTokenValid(): Observable<boolean> {
    try {
      // Realiza una solicitud HTTP al backend para verificar el token
      return this.http.post<any>(this.baseUrlAuth, null).pipe(
        map((response) => {
         // this.userSubject.next(response.user);
          return true; // Devuelve true si el token es válido
        }),
        catchError((error) => {
          console.error(
            'Error al verificar el token en el servidor:',
            error.error
          );
          return of(false); // Devuelve false si hay un error o el token no es válido
        })
      );
    } catch (error) {
      console.error('Error al verificar el token:', error);
      return of(false); // Devuelve false si hay un error en la decodificación del token
    }
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.auth.logout();
    this.router.navigate(['/login']);
  }



  getToken(): string | null {
    const token = localStorage.getItem('token')
    return token ;
    
  }

  getUser(token:string):any | null{
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken ? decodedToken : null;
  }


}
