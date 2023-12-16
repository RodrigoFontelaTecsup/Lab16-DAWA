import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private router: Router) { }

  logout() {
    // Elimina el token del almacenamiento local
    localStorage.removeItem('token');

    // Redirige al usuario a la página de inicio
    this.router.navigate(['/login']);
  }
}
