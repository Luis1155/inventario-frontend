import React, { useState } from "react";
import axios from "axios";
import config from "../config";

const BodegaNew = ({ cancelar, bodEdit }) => {
  const [bodega, setBodega] = useState(
    bodEdit
      ? bodEdit
      : {
          identificador: "",
          nombre: "",
          direccion: "",
        }
  );

  const handleInputChange = (e) => {
    setBodega({ ...bodega, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bodEdit ? putUpdateBodega(bodega, bodega._id) : postCreateBodega(bodega);
  };

  const postCreateBodega = async (bodega) => {
    const {data} = await axios.post(`${config.endPointURL}/bodegas`, bodega);
    if (data.error) {
      alert(data.message);
    window.location.reload();
  };

  const putUpdateBodega = async (bodega, id) => {
    delete bodega["_id"];
    delete bodega["createdAt"];
    delete bodega["updatedAt"];
    const {data} = await axios.put(`${config.endPointURL}/bodegas/${id}`, bodega);
    if (data.error) {
      alert(data.message);
    window.location.reload();
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
          <label>Identificador: </label>
          <input
            type="text"
            name="identificador"
            placeholder={bodEdit ? bodEdit.identificador : ""}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Nombre: </label>
          <input
            type="text"
            name="nombre"
            placeholder={bodEdit ? bodEdit.nombre : ""}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Dirección: </label>
          <input
            type="text"
            name="direccion"
            placeholder={bodEdit ? bodEdit.direccion : ""}
            onChange={handleInputChange}
          />
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

export default BodegaNew;
