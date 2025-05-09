// src/pages/ForgotPassword.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"; // Importamos framer-motion

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <motion.div
        className="flex-grow flex items-center justify-center px-6 sm:px-8 lg:px-12 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} // Animación de desvanecimiento
      >
        <div className="bg-white p-10 sm:p-12 rounded-lg shadow-xl w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            ¿Olvidaste tu contraseña?
          </h2>
          <p className="text-center text-gray-500 mb-8 text-lg">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecerla.
          </p>
          <form>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 rounded-lg w-full hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Enviar enlace
            </button>
          </form>

          {/* Enlace para volver al login */}
          <div className="mt-8 text-center text-sm sm:text-base text-gray-600">
            <Link to="/login" className="text-blue-600 hover:underline">
              Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </motion.div>

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

export default ForgotPassword;
