import React from "react";

export default function Reservas() {
  const vuelo = {
    origen: "Ciudad de México",
    destino: "Madrid",
    fecha: "2025-06-15",
    hora: "14:30",
    aerolinea: "AeroGlobal",
    precio: "$850 USD"
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#E5C9D7]">
      {/* Navbar */}
      <nav className="bg-[#26415E] text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Aerolínea</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Reservas</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="flex-grow container mx-auto px-6 py-8 space-y-8">
        <h1 className="text-3xl font-bold text-[#0B1B23]">Reservar Vuelo</h1>

        {/* Detalles del vuelo */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#C48CB3]">
          <h2 className="text-2xl font-semibold text-[#0B1B23] mb-4">Detalles del Vuelo</h2>
          {Object.entries(vuelo).map(([key, value]) => (
            <p key={key} className="text-[#26415E]">
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
            </p>
          ))}
        </div>

        {/* Formulario del pasajero */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#83A6CE]">
          <h2 className="text-2xl font-semibold text-[#0B1B23] mb-4">Datos del Pasajero</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Nombre completo" className="p-3 border rounded-xl text-[#0B1B23]" />
            <input type="email" placeholder="Correo electrónico" className="p-3 border rounded-xl text-[#0B1B23]" />
            <input type="tel" placeholder="Teléfono" className="p-3 border rounded-xl text-[#0B1B23]" />
            <input type="text" placeholder="Número de pasaporte" className="p-3 border rounded-xl text-[#0B1B23]" />
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-[#C48CB3] hover:bg-[#a76a97] text-white font-bold py-3 rounded-xl">
                Confirmar Reserva
              </button>
            </div>
          </form>
        </div>

        {/* Formulario del equipaje */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#26415E]">
          <h2 className="text-2xl font-semibold text-[#0B1B23] mb-4">Detalles del Equipaje</h2>
          <p className="text-[#26415E] mb-4">Selecciona el tipo y cantidad de equipaje permitido para tu vuelo.</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mano" className="block text-[#26415E] font-semibold mb-2">Maletas de mano</label>
              <input id="mano" type="number" min="0" placeholder="Cantidad" className="p-3 border rounded-xl text-[#0B1B23]" />
            </div>
            <div>
              <label htmlFor="facturadas" className="block text-[#26415E] font-semibold mb-2">Maletas facturadas</label>
              <input id="facturadas" type="number" min="0" placeholder="Cantidad" className="p-3 border rounded-xl text-[#0B1B23]" />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-[#83A6CE] hover:bg-[#6c90b3] text-white font-bold py-3 rounded-xl">
                Confirmar Equipaje
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#26415E] text-white text-center py-8 px-4">
        <p className="text-lg font-medium">¿Tienes dudas? Contáctanos: contacto@aerolinea.com</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Aerolínea. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
