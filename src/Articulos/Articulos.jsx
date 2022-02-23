import React, { useState } from "react";

import ArticuloNew from "./ArticuloNew";
import ArticulosList from "./ArticulosList";

const Articulos = () => {
  const [add, setAdd] = useState(false);
  const [artEdit, setArtEdit] = useState("");

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
        <h3 style={{ margin: 5 }}>Lista de Articulos</h3>
        <button
          onClick={() => {
            setArtEdit("");
            setAdd(true);
          }}
          style={{ height: 20 }}
        >
          Agregar
        </button>
      </div>
      <ArticulosList
        editar={(art) => {
          setArtEdit(art);
          setAdd(true);
        }}
      />
      {add && (
        <>
          <hr />
          <ArticuloNew
            cancelar={() => {
              setAdd(false);
              setArtEdit("");
            }}
            artEdit={artEdit}
          />
        </>
      )}
    </div>
  );
};

export default Articulos;
