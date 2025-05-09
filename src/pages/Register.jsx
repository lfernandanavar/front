// src/pages/Register.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <div className="flex-grow flex items-center justify-center px-6 sm:px-8 lg:px-12 py-12">
        <div className="bg-white p-10 sm:p-12 rounded-lg shadow-xl w-full max-w-lg border border-gray-300">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Regístrate
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Nombre */}
            <div className="mb-4">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 text-gray-700"
              />
            </div>

            {/* Apellido */}
            <div className="mb-4">
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Apellido"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 text-gray-700"
              />
            </div>

            {/* Teléfono */}
            <div className="mb-4">
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 text-gray-700"
              />
            </div>

            {/* Dirección */}
            <div className="mb-4">
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Dirección"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 text-gray-700"
              />
            </div>

            {/* Contraseña */}
            <div className="mb-6">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 rounded-lg w-full hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Crear cuenta
            </button>
          </form>

          {/* Enlace para volver al login */}
          <div className="mt-8 text-center text-sm sm:text-base text-gray-600">
            <Link to="/login" className="text-blue-600 hover:underline">
              Ya tengo una cuenta, iniciar sesión
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 px-4">
        <p className="text-sm sm:text-base font-medium">
          ¿Tienes dudas? Contáctanos:{" "}
          <a
            href="mailto:contacto@aerolinea.com"
            className="text-blue-400 hover:underline"
          >
            contacto@aerolinea.com
          </a>
        </p>
        <p className="text-xs sm:text-sm mt-3">
          &copy; {new Date().getFullYear()} Aerolínea. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Register;
