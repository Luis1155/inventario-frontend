import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import TransacciobesList from "./TransaccionesList";
import TransaccionNew from "./TransaccionNew";

const Transacciones = () => {
  const [add, setAdd] = useState(false);
  const [articulosAll, setArticulosAll] = useState([]);
  const [bodegasAll, setBodegasAll] = useState([]);
  const [transacciones, setTransacciones] = useState([]);

  useEffect(() => {
    getTransacciones();
    getArticulos();
    getBodegas();
  }, []);

  const getArticulos = async () => {
    let { data } = await axios.get(`${config.endPointURL}/articulos`);
    setArticulosAll(data);
  };

  const getBodegas = async () => {
    let { data } = await axios.get(`${config.endPointURL}/bodegas`);
    setBodegasAll(data);
  };

  const getTransacciones = async () => {
    let { data } = await axios.get(`${config.endPointURL}/transacciones`);
    setTransacciones(data);
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
        <h3 style={{ margin: 5 }}>Lista de Transacciones</h3>
        <button onClick={() => setAdd(true)} style={{ height: 20 }}>
          Agregar
        </button>
      </div>
      <TransacciobesList transacciones={transacciones} />
      {add && (
        <>
          <hr />
          <TransaccionNew
            obtenerTransacciones={getTransacciones}
            articulosAll={articulosAll}
            bodegasAll={bodegasAll}
            cancelar={() => {
              setAdd(false);
            }}
          />
        </>
      )}
    </div>
  );
};

export default Transacciones;
