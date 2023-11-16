import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  products: Producto[] = [];

  constructor(private productoService: ProductosService) {}

  ngOnInit() {
    this.products = this.productoService.getProducts();

}
}
