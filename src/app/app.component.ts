import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrProductosComida: Producto[];
  arrProductosBebida: Producto[];
  arrProductosPedidos: Producto[];


  constructor()
  {
    this.arrProductosComida = [
      new Producto ('Carne', 20, 'img'),
      new Producto ('Pescado', 25, 'img'),
      new Producto ('Verdura', 10, 'img'),
      new Producto ('Sushi', 25, 'img')
    ];

    this.arrProductosBebida = [
      new Producto ('Fanta', 2, 'img'),
      new Producto ('Cerveza', 3, 'img'),
      new Producto ('Coca-Cola', 2, 'img'),
      new Producto ('Trina', 2, 'img')
    ];

    this.arrProductosPedidos = [];

  }

  addProducto($event) {
    this.arrProductosPedidos.push($event);
  }

}


