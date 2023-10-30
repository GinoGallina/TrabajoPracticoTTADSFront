import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, of, map, catchError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrlAuth = 'http://localhost:1234/auth/validate-token';
  
  //Definir el tipo de user dsp
  private user: any;
  private token: string | null = null;

  private userSubject = new BehaviorSubject<string|null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }


  isTokenValid(): Observable<boolean> {
    try {
      // Realiza una solicitud HTTP al backend para verificar el token
      return this.http.post<any>(this.baseUrlAuth, null).pipe(
        map((response) => {
          this.user=response.user;
          this.userSubject.next(response.user);
          return true; // Devuelve true si el token es válido
        }),
        catchError((error) => {
          console.error('Error al verificar el token en el servidor:', error.error);
          return of(false); // Devuelve false si hay un error o el token no es válido
        })
      );
    } catch (error) {
      console.error('Error al verificar el token:', error);
      return of(false); // Devuelve false si hay un error en la decodificación del token
    }
  }

  getUser(): any {
    return this.user;
  }

  logout():void{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }



}
