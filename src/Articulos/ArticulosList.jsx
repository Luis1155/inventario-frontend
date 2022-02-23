import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

const ArticulosList = ({ editar }) => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    getArticulos();
  }, []);

  const getArticulos = async () => {
    let { data } = await axios.get(`${config.endPointURL}/articulos`);
    if (data.error) {
      alert(data.message);
    setArticulos(data);
  };
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
