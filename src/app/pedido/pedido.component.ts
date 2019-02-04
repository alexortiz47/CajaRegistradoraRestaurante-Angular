import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  @Input() pedido: Producto[];

  total: number;

  constructor()
  {
    this.pedido = [];
    this.total = 0;
  }

  ngOnInit() {

  }

  calculoTotal()
  {
    this.total = 0;
    for(let i = 0; i < this.pedido.length; i++)
    {
      this.total += this.pedido[i].precio;
    }
  }

}
