import React, { useState } from "react";

import BodegaNew from "./BodegaNew";
import BodegasList from "./BodegasList";

const Bodegas = () => {
  const [add, setAdd] = useState(false);
  const [bodEdit, setBodEdit] = useState("");

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
        <h3 style={{ margin: 5 }}>Bodegas</h3>
        <button onClick={() => setAdd(true)} style={{ height: 20 }}>
          Agregar
        </button>
      </div>
      <BodegasList
        editar={(bod) => {
          setBodEdit(bod);
          setAdd(true);
        }}
      />
      <hr />
      {add && (
        <BodegaNew
          cancelar={() => {
            setAdd(false);
            setBodEdit('')
          }}
          bodEdit={bodEdit}
        />
      )}
    </div>
  );
};

export default Bodegas;
