import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

const BodegasList = ({ editar, obtener }) => {
  const [bodegas, setBodegas] = useState([]);

  useEffect(() => {
    getBodegas();
  }, []);

  const getBodegas = async () => {
    let { data } = await axios.get(`${config.endPointURL}/bodegas`);
    setBodegas(data);
  };

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
                <button onClick={() => obtener(b)}>Ver</button>
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
