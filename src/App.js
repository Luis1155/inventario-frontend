import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Articulos from "./Articulos/Articulos";
import Bodegas from "./Bodegas/Bodegas";

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
        <Link to={"/"} style={{ flex: 1, height: 50 }}>
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
