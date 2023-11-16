import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  private products: Producto[] = [
    {
      id: 1,
      name: 'Producto 1',
      price: 19.99,
      description: 'Descripción del Producto 1',
      imageUrl: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/photos_macos_bigsur_icon_189835.png',
    },
    {
      id: 1,
      name: 'Producto 1',
      price: 19.99,
      description: 'Descripción del Producto 1',
      imageUrl: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/photos_macos_bigsur_icon_189835.png',
    },
    {
      id: 1,
      name: 'Producto 1',
      price: 19.99,
      description: 'Descripción del Producto 1',
      imageUrl: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/photos_macos_bigsur_icon_189835.png',
    },
    // Agrega más productos según sea necesario
  ];

  getProducts(): Producto[] {
    return this.products;
  }
}
