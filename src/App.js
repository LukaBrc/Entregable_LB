import React, { useState } from "react";
import Cabecera from "./components/Cabecera/Cabecera"
import Listado from "./components/Listado/Listado"
import data from "./db/data.json"

function App() {
  const [cantidad, setCantidad] = useState(0);

  function agregarAlCarrito() {
    setCantidad(cantidad + 1)
  }

  return (
    <div className="App">
      <Cabecera cantCarrito={cantidad}  />
      <Listado productos={data} agregarAlCarrito={agregarAlCarrito}/>
    </div>
  );
}

export default App;
