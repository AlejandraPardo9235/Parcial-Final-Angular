import { Component } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  userName: string = '';

  constructor(private autenticacionService: AutenticacionService) {
    this.userName = autenticacionService.getUserName();
  }

}
