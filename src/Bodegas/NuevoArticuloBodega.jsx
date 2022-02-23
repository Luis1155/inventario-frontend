import React, { useState } from "react";
import axios from "axios";
import config from "../config";

const NuevoArticuloBodega = ({
  articulos,
  bodega,
  cancelar,
  obtenerArticulos,
}) => {
  const [artAux, setArtAux] = useState({
    id_articulo: "",
    cantidad: "",
  });

  const postAddArticuloToBodega = async () => {
    let dataToSend = {
      id_bodega: bodega._id,
      ...artAux,
    };
    if (artAux.cantidad < 0) {
      alert("La cantidad no puede ser negativa");
      return;
    }
    let { data } = await axios.post(
      `${config.endPointURL}/bodegas_articulos`,
      dataToSend
    );
    if (data.error) {
      alert(data.message);
    } else {
      obtenerArticulos();
    }
    cancelar();
  };

  const handleChange = (e) => {
    setArtAux({ ...artAux, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAddArticuloToBodega();
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
          width: 300,
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <label>Articulo: </label>
          <select
            style={{ width: 186 }}
            onChange={handleChange}
            name="id_articulo"
            // value={artAux.id_articulo}
          >
            <option></option>
            {articulos.map((a) => {
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
          <input type="number" name="cantidad" onChange={handleChange} />
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

export default NuevoArticuloBodega;
