import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Bodegas from "./Bodegas/Bodegas";
import Articulos from "./Articulos/Articulos";
import Transacciones from "./Transacciones/Transacciones";

function App() {
  const Navbar = () => {
    return (
      <div style={{ display: "flex" }}>
        <Link to={"/articulos"} style={{ flex: 1, height: 50 }}>
          <h4>Articulos</h4>
        </Link>
        <Link to={"/bodegas"} style={{ flex: 1, height: 50 }}>
          <h4>Bodegas</h4>
        </Link>
        <Link to={"/transacciones"} style={{ flex: 1, height: 50 }}>
          <h4>Transacciones</h4>
        </Link>
      </div>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route root path="/articulos" element={<Articulos />} />
            <Route path="/bodegas" element={<Bodegas />} />
            <Route path="/transacciones" element={<Transacciones />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
