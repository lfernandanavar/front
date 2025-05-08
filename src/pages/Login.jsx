// src/pages/Login.jsx
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Iniciar sesión</h2>
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <input
          type="email"
          placeholder="Correo"
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 mb-4 border rounded"
        />
        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
