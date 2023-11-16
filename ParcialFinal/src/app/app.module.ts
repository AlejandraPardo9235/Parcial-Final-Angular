import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGenericoComponent } from './dashboard-generico/dashboard-generico.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardGenericoComponent,
    ProductosComponent,
    LoginComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
