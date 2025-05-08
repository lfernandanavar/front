// src/pages/Perfil.jsx
import React from "react";

const Perfil = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-blue-900 p-6">
      <h2 className="text-3xl font-bold mb-4">Perfil del Usuario</h2>
      <p className="text-lg">Nombre: Juan Pérez</p>
      <p className="text-lg">Correo: juan@example.com</p>
    </div>
  );
};

export default Perfil;
