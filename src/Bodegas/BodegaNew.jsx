import React, { useState } from "react";
import axios from "axios";

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
    bodEdit 
      ? putUpdateBodega(bodega, bodega._id)
      : postCreateBodega(bodega);
  };

  const postCreateBodega = async (bodega) => {
    const res = await axios.post(
      "https://inventario-fonseca.herokuapp.com/bodegas",
      bodega
    );
    window.location.reload();
  };

  const putUpdateBodega = async (bodega, id) => {
    delete bodega["_id"];
    delete bodega["createdAt"];
    delete bodega["updatedAt"];
    const res = await axios.put(
      `https://inventario-fonseca.herokuapp.com/bodegas/${id}`,
      bodega
    );
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
