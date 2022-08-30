// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
import React from 'react'

export default function Cabecera({cantidadTotal}) {
  
  return (
    <header>
        <h1>Carrito de Compras LB Store</h1>
        <p>Cantidad de productos: <span>{cantidadTotal}</span></p>
    </header>
  );
}
