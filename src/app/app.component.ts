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
  arrProductosPostres: Producto[];
  arrProductosPedidos: Producto[];


  constructor()
  {
    this.arrProductosComida = [
      new Producto ('Carne', 15, '../assets/carne.png'),
      new Producto ('Pollo', 15, '../assets/pollo.png'),
      new Producto ('Pescado', 18, '../assets/pescado.png'),
      new Producto ('Verdura', 10, '../assets/verdura.png'),
      new Producto ('Pasta', 12, '../assets/pasta.png'),
      new Producto ('Hamburguesa', 13, '../assets/hamburguesa.png'),
      new Producto ('Pizza', 13, '../assets/pizza.png'),
      new Producto ('Sushi', 14, '../assets/sushi.png')
    ];

    this.arrProductosBebida = [
      new Producto ('Refresco', 2, '../assets/refresco.png'),
      new Producto ('Cerveza', 3, '../assets/cerve.png'),
      new Producto ('Copa Vino', 1.50, '../assets/copavino.png'),
      new Producto ('Botella Vino', 20, '../assets/botellavino.png')
    ];

    this.arrProductosPostres = [
      new Producto ('Tarta', 4, '../assets/tarta.png'),
      new Producto ('Fruta', 2, '../assets/fruta.png'),
      new Producto ('Café', 1.50, '../assets/cafe.png'),
      new Producto ('Infusión', 1.50, '../assets/infusion.png')
    ];

    this.arrProductosPedidos = [];

  }

  addProducto($event) {
    this.arrProductosPedidos.push($event);
  }

}


