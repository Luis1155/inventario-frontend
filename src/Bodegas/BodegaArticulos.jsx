import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import NuevoArticuloBodega from "./NuevoArticuloBodega";

const BodegaArticulos = ({ articulos, bodega, obtenerArticulos }) => {
  const [articulosAll, setArticulosAll] = useState([]);
  const [newArt, setNewArt] = useState(false);

  useEffect(() => {
    getArticulos();
  }, []);

  const getArticulos = async () => {
    let { data } = await axios.get(`${config.endPointURL}/articulos`);
    if (data.error)
      alert(data.message);
    setArticulosAll(data);
  };

  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 5 }}>{bodega.nombre}</h3>
        <button style={{ height: 20 }} onClick={() => setNewArt(true)}>
          Agregar articulo
        </button>
      </div>
      <table width={"100%"}>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio unidad</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        {articulos.map((a) => {
          return (
            <tbody key={a._id}>
              <tr>
                <td>{a.identificador}</td>
                <td>{a.nombre}</td>
                <td>{a.descripcion}</td>
                <td>{a.precio_unidad}</td>
                <td>{a.cantidad}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {newArt && (
        <>
          <hr />
          <NuevoArticuloBodega
            articulos={articulosAll}
            obtenerArticulos={obtenerArticulos}
            bodega={bodega}
            cancelar={() => setNewArt(false)}
          />
        </>
      )}
    </div>
  );
};

export default BodegaArticulos;
