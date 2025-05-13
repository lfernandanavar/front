import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Ruta relativa desde donde está este componente

export default function Reservas() {
  const vuelo = {
    origen: "Ciudad de México",
    destino: "Madrid",
    fecha: "2025-06-15",
    hora: "14:30",
    aerolinea: "AeroGlobal",
    precio: "$850 USD"
  };

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    pasaporte: "",
    equipajeMano: 0,
    equipajeFacturado: 0,
    tarjeta: "",
    vencimiento: "",
    cvv: ""
  });

  const [error, setError] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validarFormulario = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pasaporteRegex = /^[A-Z0-9]{6,9}$/;
    const tarjetaRegex = /^\d{16}$/;
    const vencimientoRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^\d{3}$/;

    if (!form.nombre || !form.email || !form.telefono || !form.pasaporte) {
      return "Por favor completa todos los datos del pasajero.";
    }
    if (!emailRegex.test(form.email)) {
      return "El correo electrónico no es válido.";
    }
    if (!pasaporteRegex.test(form.pasaporte)) {
      return "El número de pasaporte debe tener entre 6 y 9 caracteres (mayúsculas/números).";
    }
    if (!tarjetaRegex.test(form.tarjeta)) {
      return "El número de tarjeta debe tener 16 dígitos.";
    }
    if (!vencimientoRegex.test(form.vencimiento)) {
      return "La fecha de vencimiento debe estar en formato MM/AA.";
    }
    if (!cvvRegex.test(form.cvv)) {
      return "El CVV debe tener 3 dígitos.";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensajeError = validarFormulario();
    if (mensajeError) {
      setError(mensajeError);
      return;
    }

    setError("");
    setConfirmado(true);
    console.log("Reserva enviada:", form);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-8 space-y-6">
        <h1 className="text-3xl font-bold">Reservar Vuelo</h1>

        {/* Detalles del vuelo */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Detalles del Vuelo</h2>
          {Object.entries(vuelo).map(([key, value]) => (
            <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
          ))}
        </div>

        {!confirmado ? (
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-2xl shadow-md border border-gray-200 space-y-6">
            {/* Sección Pasajero */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Datos del Pasajero</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre completo" className="p-3 border rounded-xl" />
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Correo electrónico" className="p-3 border rounded-xl" />
                <input name="telefono" value={form.telefono} onChange={handleChange} type="tel" placeholder="Teléfono" className="p-3 border rounded-xl" />
                <input name="pasaporte" value={form.pasaporte} onChange={handleChange} placeholder="Número de pasaporte" className="p-3 border rounded-xl" />
              </div>
            </section>

            {/* Sección Equipaje */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Equipaje</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="equipajeMano" value={form.equipajeMano} onChange={handleChange} type="number" min="0" placeholder="Maletas de mano" className="p-3 border rounded-xl" />
                <input name="equipajeFacturado" value={form.equipajeFacturado} onChange={handleChange} type="number" min="0" placeholder="Maletas facturadas" className="p-3 border rounded-xl" />
              </div>
            </section>

            {/* Sección Pago */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Pago</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="tarjeta" value={form.tarjeta} onChange={handleChange} placeholder="Número de tarjeta (16 dígitos)" className="p-3 border rounded-xl" />
                <input name="vencimiento" value={form.vencimiento} onChange={handleChange} placeholder="Vencimiento (MM/AA)" className="p-3 border rounded-xl" />
                <input name="cvv" value={form.cvv} onChange={handleChange} placeholder="CVV (3 dígitos)" className="p-3 border rounded-xl" />
              </div>
            </section>

            {error && <p className="text-red-600 font-medium">{error}</p>}

            <div className="text-right">
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl"
              >
                Confirmar Reserva
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md border border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-green-600">¡Reserva Confirmada!</h2>
            <p className="mt-4">Gracias por tu compra, {form.nombre}. Hemos enviado la confirmación a {form.email}.</p>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p className="text-lg">¿Tienes dudas? Escríbenos a contacto@aerolinea.com</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Aerolínea. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
