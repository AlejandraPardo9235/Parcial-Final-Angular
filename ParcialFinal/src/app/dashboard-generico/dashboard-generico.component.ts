import { Component } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-generico',
  templateUrl: './dashboard-generico.component.html',
  styleUrls: ['./dashboard-generico.component.css']
})
export class DashboardGenericoComponent {


  userName: string = '';

  constructor(private autenticacionService: AutenticacionService, private router: Router) {}

  ngOnInit() {
    this.userName = this.autenticacionService.getUserName();

    // Verifica si el usuario tiene permisos, de lo contrario, redirige a la página de inicio
    if (!this.autenticacionService.otrosRoles(['cliente', 'invitado'])) {
      this.router.navigateByUrl('/'); // Cambia esto a la ruta que desees para los usuarios no permitidos
    }
  }

}
