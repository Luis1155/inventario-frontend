import React, { useEffect, useState } from 'react'
import axios from "axios";

const BodegasList = () => {
  const [bodegas, setBodegas] = useState([])

  useEffect(() => {
    axios
      .get("https://inventario-fonseca.herokuapp.com/bodegas")
      .then(({ data }) => {
        console.log(data);
        setBodegas(data)
      });
  }, [])

  return (
    <table width={"100%"}>
      <caption><h3>Bodegas</h3></caption>
      <tr>
        <th>Identificador</th>
        <th>Nombre</th>
        <th>Direccion</th>
      </tr>
      {
        bodegas.map(b => {
          return (
            <tr>
              <td onClick={() => {alert("Mama")}}>{b.identificador}</td>
              <td>{b.nombre}</td>
              <td>{b.direccion}</td>
            </tr>
          )
        })
      }
    </table>
  )
}

export default BodegasList