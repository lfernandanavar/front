import React, { useState } from "react";
import { Menu, X, Plane } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Inicio", "Destinos", "Nosotros", "Contacto"];

  return (
    <header className="bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Aerolínea</div>

        {/* Menú escritorio */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-300 font-medium">
          {links.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="hover:text-white transition"
            >
              {link}
            </a>
          ))}

          {/* Ícono avión (carrito) */}
          <button className="hover:text-white transition">
            <Plane size={22} />
          </button>

          {/* Botón de inicio de sesión */}
          <button className="ml-2 bg-white text-gray-900 px-4 py-1 rounded-full hover:bg-gray-200 transition text-sm font-semibold">
            Iniciar sesión
          </button>
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
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-700 flex items-center space-x-3">
              <Plane size={20} className="text-gray-300" />
              <button className="text-sm text-white">Iniciar sesión</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
