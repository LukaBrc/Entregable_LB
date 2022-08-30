import React from 'react'
import Item from './Item/Item'

export default function Listado({ productos, agregarAlCarrito }) {
  
  return (
    <div className='container'>
      {productos.map((dataPublicacion) => 
      <Item key={dataPublicacion.id} publicacion={dataPublicacion} agregarAlCarrito={agregarAlCarrito} />)}
    </div>
  )
}
