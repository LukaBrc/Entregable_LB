// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
import React, {useState} from 'react'

export default function Cabecera({}) {
  const [count, setCount] = useState(0);
  
  return (
    <header>
        <h1>Carrito de Compras LB Store</h1>
        <p>Cantidad de productos: <span>{count}</span></p>
    </header>
  );
}
