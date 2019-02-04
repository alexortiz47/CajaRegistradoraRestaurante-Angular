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

  constructor()
  {
    this.arrProductosComida = [
      new Producto ('Carne', '20', 'carne.jpg'),
      new Producto ('Pescado', '25', 'pescado.jpg')
    ];

    this.arrProductosBebida = [
      new Producto ('Fanta', '2', 'fanta.jpg'),
      new Producto ('Cerveza', '3', 'cerve.jpg')
    ];

  }
}


