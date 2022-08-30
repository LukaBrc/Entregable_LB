import React, {useState} from "react"

export default function Item({publicacion, agregarAlCarrito}) {
  const [count, setCount] = useState(publicacion.stock);
  const [outOfStock, setOutOfStock] = useState(false);
  const [buttonText, setButtonText] = useState('COMPRAR');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const arr = []
  arr.push(require('../../../assets/img-nike.webp'))
  arr.push(require('../../../assets/img-puma.jpg'));
  arr.push(require('../../../assets/img-adidas.jpg'));
  
  
  function comprar() {
    if (count - 1 <= 0) {
      agregarAlCarrito()
      setOutOfStock(true)
      setCount("Agotado")
      setButtonText("SIN STOCK")
      setButtonDisabled(true)

    } else {
      agregarAlCarrito()
      setCount(count - 1)
    }
  }

  return (
    <div className='producto'>
      <img src={arr[publicacion.id]} alt="Product" ></img>
      <h3>{publicacion.producto.nombre}</h3>
      <p>{publicacion.producto.descripcion}</p>
      <h5>En Stock: <span className={`${outOfStock ? "outOfStock" : "" }`}>{count}</span></h5>
      <button onClick={comprar} disabled={buttonDisabled} >{buttonText}</button>
    </div>
  )
}
