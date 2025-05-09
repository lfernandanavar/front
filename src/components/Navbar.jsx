import React, { useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo como enlace a home */}
        <Link to="/" className="text-2xl font-bold text-white hover:opacity-90">
          Aerolínea
        </Link>

        {/* Menú escritorio */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-300 font-medium">
          <button className="hover:text-white transition">
            <Plane size={22} />
          </button>

          <Link
            to="/login"
            className="ml-2 bg-white text-gray-900 px-4 py-1 rounded-full hover:bg-gray-200 transition text-sm font-semibold"
          >
            Iniciar sesión
          </Link>
        </nav>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-700 shadow-sm">
          <ul className="flex flex-col px-6 py-4 space-y-3">
            <li className="flex items-center space-x-3">
              <Plane size={20} className="text-gray-300" />
              <Link to="/login" className="text-sm text-white">
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Navbar;
