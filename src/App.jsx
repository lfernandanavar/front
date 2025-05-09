// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Reservar from "./pages/Reservar"; // Asegúrate de tener este componente creado

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservar" element={<Reservar />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default App;
