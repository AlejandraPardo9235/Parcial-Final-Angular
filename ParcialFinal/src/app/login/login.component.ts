import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private autenticacionService: AutenticacionService, private router: Router) {}

  login() {
    if (this.autenticacionService.login(this.email, this.password)) {
      console.log('Usuario autenticado.');
      this.router.navigate(['/dashboard']); // Redirige después de la autenticación
    } else {
      console.log('Autenticación fallida');
    }

}
}
