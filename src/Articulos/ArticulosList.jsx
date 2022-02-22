import React, { useEffect, useState } from 'react'
import axios from "axios";

const ArticulosList = () => {
  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    axios
      .get("https://inventario-fonseca.herokuapp.com/articulos")
      .then(({ data }) => {
        console.log(data);
        setArticulos(data)
      });
  }, [])

  return (
    <table width={"80%"}>
      <caption><h3>Articulos</h3></caption>
      <tr>
        <th>Identificador</th>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>Precio unidad</th>
      </tr>
      {
        articulos.map(a => {
          return (
            <tr key={a._id.toString()}>
              <td>{a.identificador}</td>
              <td>{a.nombre}</td>
              <td>{a.descripcion}</td>
              <td>{a.precio_unidad}</td>
            </tr>
          )
        })
      }
    </table>
  )
}

export default ArticulosList