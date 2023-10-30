import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Obtén el token del almacenamiento local (o de donde lo tengas)
        const token = localStorage.getItem('token');

        // Clona la solicitud original y agrega el encabezado de autorización
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }else{
            console.log('No hay token');
        }

        // Continúa con la solicitud modificada
        return next.handle(request);
    }
}
