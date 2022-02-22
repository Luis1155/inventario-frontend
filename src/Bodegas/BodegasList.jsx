import React, { useEffect, useState } from "react";
import axios from "axios";

const BodegasList = ({ editar }) => {
  const [bodegas, setBodegas] = useState([]);

  useEffect(() => {
    axios
      .get("https://inventario-fonseca.herokuapp.com/bodegas")
      .then(({ data }) => {
        console.log(data);
        setBodegas(data);
      });
  }, []);

  return (
    <table width={"100%"}>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Identificador</th>
          <th>Nombre</th>
          <th>Direccion</th>
        </tr>
      </thead>
      {bodegas.map((b) => {
        return (
          <tbody key={b._id}>
            <tr>
              <td>
                <button>Ver</button>
              </td>
              <td>
                <button onClick={() => editar(b)}>Editar</button>
              </td>
              <td>{b.identificador}</td>
              <td>{b.nombre}</td>
              <td>{b.direccion}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default BodegasList;
