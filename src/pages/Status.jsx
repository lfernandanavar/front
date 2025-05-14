import React, { useState } from "react";
import { Link } from "react-router-dom";

const Status = () => {
  const [filtroStatus, setFiltroStatus] = useState("Todos");

  const [vuelos, setVuelos] = useState([
    { id: 1, origen: "CDMX", destino: "Cancún", status: "En horario" },
    { id: 2, origen: "Monterrey", destino: "Guadalajara", status: "Retrasado" },
    { id: 3, origen: "Tijuana", destino: "CDMX", status: "Cancelado" },
    { id: 4, origen: "CDMX", destino: "Monterrey", status: "Abordando" },
    { id: 5, origen: "Cancún", destino: "Tijuana", status: "Finalizado" },
  ]);

  const handleStatusChange = (id, nuevoStatus) => {
    const actualizados = vuelos.map((vuelo) =>
      vuelo.id === id ? { ...vuelo, status: nuevoStatus } : vuelo
    );
    setVuelos(actualizados);
  };

  const vuelosFiltrados = vuelos.filter(
    (vuelo) => filtroStatus === "Todos" || vuelo.status === filtroStatus
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-gray-900 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/homea" className="text-2xl font-bold hover:text-gray-400 transition-colors">
            Panel Administrador
          </Link>
          <p className="text-gray-400 text-sm">Gestión general del sistema</p>
        </div>
      </header>

      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cambiar Status de Vuelos</h1>

        {/* Filtro por status */}
        <div className="mb-8 max-w-xs">
          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="Todos">Todos los estados</option>
            <option value="En horario">En horario</option>
            <option value="Retrasado">Retrasado</option>
            <option value="Cancelado">Cancelado</option>
            <option value="Abordando">Abordando</option>
            <option value="Finalizado">Finalizado</option>
          </select>
        </div>

        {/* Tarjetas de vuelos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vuelosFiltrados.length > 0 ? (
            vuelosFiltrados.map((vuelo) => (
              <div key={vuelo.id} className="bg-gray-100 p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Vuelo #{vuelo.id}</h2>
                <p className="text-gray-600">Origen: {vuelo.origen}</p>
                <p className="text-gray-600">Destino: {vuelo.destino}</p>
                <p className="mt-2 text-gray-900 font-bold">Status actual: {vuelo.status}</p>

                <select
                  className="mt-4 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  value={vuelo.status}
                  onChange={(e) => handleStatusChange(vuelo.id, e.target.value)}
                >
                  <option value="En horario">En horario</option>
                  <option value="Retrasado">Retrasado</option>
                  <option value="Cancelado">Cancelado</option>
                  <option value="Abordando">Abordando</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full">No hay vuelos con ese estado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Status;
