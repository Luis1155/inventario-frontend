import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

const TransacciobesList = ({transacciones}) => {
  
  return (
    <table width={"100%"}>
      <thead>
        <tr>
          <th>Bodega origen</th>
          <th>Bodega destino</th>
          <th>Articulo</th>
          <th>Cantidad</th>
          <th>Fecha</th>
          <th>Hora</th>
        </tr>
      </thead>
      {transacciones.map((t) => {
        return (
          <tbody key={t._id}>
            <tr>
              <td>{t.id_bodega_origen}</td>
              <td>{t.id_bodega_destino}</td>
              <td>{t.id_articulo}</td>
              <td>{t.cantidad}</td>
              <td>{t.fecha}</td>
              <td>{t.hora}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TransacciobesList;
