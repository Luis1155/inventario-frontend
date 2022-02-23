import React, { useState } from "react";
import axios from "axios";
import config from "../config";

const ArticuloNew = ({ cancelar, artEdit }) => {
  const [articulo, setArticulo] = useState(
    artEdit
      ? artEdit
      : {
          identificador: "",
          nombre: "",
          descripcion: "",
          precio_unidad: 0,
        }
  );

  const handleInputChange = (e) => {
    setArticulo({ ...articulo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    artEdit
      ? putUpdateArticulo(articulo, articulo._id)
      : postCreateArticulo(articulo);
  };

  const postCreateArticulo = async (articulo) => {
    const { data } = await axios.post(
      `${config.endPointURL}/articulos`,
      articulo
    );
    if (data.error) alert(data.message);
    window.location.reload();
  };

  const putUpdateArticulo = async (articulo, id) => {
    delete articulo["_id"];
    delete articulo["createdAt"];
    delete articulo["updatedAt"];
    const { data } = await axios.put(
      `${config.endPointURL}/articulos/${id}`,
      articulo
    );
    if (data.error) alert(data.message);
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
            placeholder={artEdit ? artEdit.identificador : ""}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Nombre: </label>
          <input
            type="text"
            name="nombre"
            placeholder={artEdit ? artEdit.nombre : ""}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Descripcion: </label>
          <input
            type="text"
            name="descripcion"
            placeholder={artEdit ? artEdit.descripcion : ""}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Precio unidad: </label>
          <input
            type="number"
            name="precio_unidad"
            placeholder={artEdit ? artEdit.precio_unidad : ""}
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

export default ArticuloNew;
