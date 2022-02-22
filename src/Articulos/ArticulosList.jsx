import React, { useEffect, useState } from "react";
import axios from "axios";

const ArticulosList = ({ editar }) => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    axios
      .get("https://inventario-fonseca.herokuapp.com/articulos")
      .then(({ data }) => {
        console.log(data);
        setArticulos(data);
      });
  }, []);

  return (
    <table width={"100%"}>
      <thead>
        <tr>
          <th></th>
          <th>Identificador</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio unidad</th>
        </tr>
      </thead>
      {articulos.map((a) => {
        return (
          <tbody key={a._id}>
            <tr>
              <td>
                <button onClick={() => editar(a)}>Editar</button>
              </td>
              <td>{a.identificador}</td>
              <td>{a.nombre}</td>
              <td>{a.descripcion}</td>
              <td>{a.precio_unidad}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default ArticulosList;
