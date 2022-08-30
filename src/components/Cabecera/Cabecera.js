import React from 'react'

export default function Cabecera({cantCarrito}) {
  
  return (
    <header>
        <h1>Carrito de Compras LB Store</h1>
        <p>Cantidad de productos: <span>{cantCarrito}</span></p>
    </header>
  );
}
