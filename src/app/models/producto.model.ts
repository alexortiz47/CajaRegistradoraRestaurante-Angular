export class Producto
{
  nombre: string;
  precio: string;
  imagen: string;

  constructor(pNombre: string, pPrecio: string, pImagen: string)
  {
    this.nombre = pNombre;
    this.precio = pPrecio;
    this.imagen = pImagen;
  }
}
