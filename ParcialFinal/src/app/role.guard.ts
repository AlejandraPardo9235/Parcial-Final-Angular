import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate{
  constructor(private autenticacionService: AutenticacionService, private router: Router) {}

  canActivate(): boolean {
    const user = this.autenticacionService.getCurrentUser();

    // Verifica el rol del usuario antes de permitir el acceso
    if (user && (user.role === 'admin' || user.role === 'cliente' || user.role === 'invitado')) {
      return true;
    } else {
      // Redirige a la página de inicio si el usuario no tiene el rol adecuado
      this.router.navigate(['/']);
      return false;
    }
  }
}
