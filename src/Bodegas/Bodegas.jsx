import React, { useState } from "react";
import axios from "axios";
import config from "../config";

import BodegaNew from "./BodegaNew";
import BodegasList from "./BodegasList";
import BodegaArticulos from "./BodegaArticulos";

const Bodegas = () => {
  const [add, setAdd] = useState(false);
  const [bodSelect, setBodSelect] = useState("");
  const [showArt, setShowArt] = useState(false);
  const [articulosBodega, setArticulosBodega] = useState([]);

  const getArticulosDeBodega = async (bodega) => {
    let res = await axios.get(
      `${config.endPointURL}/bodegas_articulos/${bodega._id}`
    );
    setArticulosBodega(res.data);
    setBodSelect(bodega);
    setShowArt(true);
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
        <h3 style={{ margin: 5 }}>Lista de Bodegas</h3>
        <button
          onClick={() => {
            setAdd(true);
            setBodSelect("");
            setShowArt(false);
          }}
          style={{ height: 20 }}
        >
          Nueva bodega
        </button>
      </div>
      <BodegasList
        obtener={(bodega) => {
          getArticulosDeBodega(bodega);
          setAdd(false);
        }}
        editar={(bod) => {
          setShowArt(false);
          setBodSelect(bod);
          setAdd(true);
        }}
      />

      {add && (
        <>
          <hr />
          <BodegaNew
            cancelar={() => {
              setAdd(false);
              setBodSelect("");
            }}
            bodEdit={bodSelect}
          />
        </>
      )}
      {showArt && (
        <>
          <hr />
          <BodegaArticulos
            articulos={articulosBodega}
            bodega={bodSelect}
            obtenerArticulos={() => getArticulosDeBodega(bodSelect)}
          />
        </>
      )}
    </div>
  );
};

export default Bodegas;
