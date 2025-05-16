import React from "react";
import { Routes, Route } from "react-router-dom";

// Páginas públicas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Reservas from "./pages/Reservas";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import HomeA from "./pages/HomeA";
import VuelosA  from "./pages/VuelosA";
import Usuarios from "./pages/Usuarios";
import Nominas from "./pages/Nomina";
import Status  from "./pages/Status";
import Reportes from "./pages/Reportes";
import Graficas from "./pages/Graficas";
import Destinos from "./pages/Destinos";


const App = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/reservar" element={<Reservas />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homea" element={<HomeA />} />
      <Route path="/admin/vuelosa" element={<VuelosA />} />
      <Route path="/admin/usuarios" element={<Usuarios />} />
      <Route path="/admin/nomina" element={<Nominas />} />
      <Route path="/admin/status" element={<Status />} />
      <Route path="/admin/reportes" element={<Reportes />} />
      <Route path="/admin/graficas" element={<Graficas />} />    
      <Route path="/destinos" element={<Destinos />} />    
    
    </Routes>
  );
};

export default App;
