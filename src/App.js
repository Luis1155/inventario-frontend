import React, { useEffect, useState } from "react";

import "./App.css";
import ArticuloNew from "./Articulos/ArticuloNew";
import ArticulosList from "./Articulos/ArticulosList";
import BodegasList from "./Bodegas/BodegasList";

function App() {
  const headerComponent = () => {
    return <div className="Component">lsdkafñlsfkña</div>;
  };

  return (
    <div className="App">
      {headerComponent()}
      <table width={"100%"}>
        <th>
          <ArticulosList />
          <ArticuloNew />
        </th>
        <th>
          <BodegasList />
        </th>
      </table>
    </div>
  );
}

export default App;
