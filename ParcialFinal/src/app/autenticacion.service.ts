import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private users = [
    { email: 'admin@eam.com', password: 'admin', role: 'admin', name: 'Admin' },
    { email: 'cliente@eam.com', password: 'cliente', role: 'cliente', name: 'Cliente' },
    { email: 'invitado@eam.com', password: 'invitado', role: 'invitado', name: 'Invitado' },
  ];

  constructor() {}

  login(email: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }

    return false;
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    const userString = sessionStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }

  getUserName(): string {
    const user = this.getCurrentUser();
    return user ? user.name : '';
  }

  otrosRoles(otrosRoles: string[]): boolean {
    const user = this.getCurrentUser();
    return user ? otrosRoles.includes(user.role) : false;
  }

  hasAllowedRole(allowedRoles: string[]): boolean {
    const user = this.getCurrentUser();
    return user ? allowedRoles.includes(user.role) : false;
  }


}

