import axios from "axios";
import React, { useState } from "react";
import config from "../config";
import moment from "moment";

const TransaccionNew = ({
  cancelar,
  bodegasAll,
  articulosAll,
  obtenerTransacciones,
}) => {
  const [transaccion, setTransaccion] = useState({
    id_bodega_origen: "",
    id_bodega_destino: "",
    id_articulo: "",
    cantidad: "",
    fecha: "",
    hora: "",
  });

  const handleChange = (e) => {
    setTransaccion({ ...transaccion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    transaccion.fecha = moment().format("YYYY-MM-DD");
    transaccion.hora = moment().format("hh:mm a");
    postCreateTransaccion(transaccion);
  };

  const postCreateTransaccion = async (transaccion) => {
    if (transaccion.cantidad < 0) {
      alert("La cantidad no puede ser negativa");
      return;
    }
    const { data } = await axios.post(
      `${config.endPointURL}/transacciones`,
      transaccion
    );
    if (data.error) {
      alert(data.message);
    } else {
      obtenerTransacciones();
    }
    cancelar();
  };

  return (
    <div
      style={{
        justifyContent: "center",
        marginRight: 120,
        display: "flex",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          width: 500,
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <label>Bodega de origen: </label>
          <select
            style={{ width: 186 }}
            onChange={handleChange}
            name="id_bodega_origen"
          >
            <option></option>
            {bodegasAll.map((b) => {
              return (
                <option key={b._id} value={b._id}>
                  {b.nombre}
                </option>
              );
            })}
          </select>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Bodega de destino: </label>
          <select
            style={{ width: 186 }}
            onChange={handleChange}
            name="id_bodega_destino"
          >
            <option></option>
            {bodegasAll.map((b) => {
              return (
                <option key={b._id} value={b._id}>
                  {b.nombre}
                </option>
              );
            })}
          </select>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Articulo: </label>
          <select
            style={{ width: 186 }}
            onChange={handleChange}
            name="id_articulo"
          >
            <option></option>
            {articulosAll.map((a) => {
              return (
                <option key={a._id} value={a._id}>
                  {a.nombre}
                </option>
              );
            })}
          </select>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Cantidad: </label>
          <input type="text" name="cantidad" onChange={handleChange} />
        </div>

        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          <button onClick={cancelar}>Cancelar</button>
          <button>Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default TransaccionNew;
