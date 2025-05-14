import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nominas = () => {
  const [nominas, setNominas] = useState([]);
  const [formData, setFormData] = useState({ nombre: "", puesto: "", vuelos: 0 });
  const [editIndex, setEditIndex] = useState(null);

  const calcularSueldoBase = (puesto) => {
    if (puesto === "Piloto") return 100;
    if (puesto === "Copiloto") return 75;
    if (puesto === "Azafata") return 50;
    return 0;
  };

  const calcularNomina = ({ puesto, vuelos }) => {
    const base = calcularSueldoBase(puesto);
    const pagoVuelos = vuelos * 30;
    const bruto = base + pagoVuelos;
    const descuento = bruto * 0.1;
    const prestaciones = bruto * 0.05;
    const neto = bruto - descuento + prestaciones;
    return { base, pagoVuelos, descuento, prestaciones, neto };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaNomina = {
      ...formData,
      vuelos: Number(formData.vuelos),
      ...calcularNomina(formData),
    };

    if (editIndex !== null) {
      const updated = [...nominas];
      updated[editIndex] = nuevaNomina;
      setNominas(updated);
      setEditIndex(null);
    } else {
      setNominas([...nominas, nuevaNomina]);
    }

    setFormData({ nombre: "", puesto: "", vuelos: 0 });
  };

  const handleEdit = (index) => {
    const nomina = nominas[index];
    setFormData({
      nombre: nomina.nombre,
      puesto: nomina.puesto,
      vuelos: nomina.vuelos,
    });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = nominas.filter((_, i) => i !== index);
    setNominas(updated);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      {/* Contenido */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Gestión de Nóminas</h1>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-lg mb-12 grid md:grid-cols-3 gap-6 border border-gray-200"
        >
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <select
            name="puesto"
            value={formData.puesto}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="">Seleccionar Puesto</option>
            <option value="Piloto">Piloto</option>
            <option value="Copiloto">Copiloto</option>
            <option value="Azafata">Azafata</option>
          </select>
          <input
            type="number"
            name="vuelos"
            value={formData.vuelos}
            onChange={handleChange}
            placeholder="Número de vuelos"
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-colors col-span-full"
          >
            {editIndex !== null ? "Actualizar Nómina" : "Agregar Nómina"}
          </button>
        </form>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nominas.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-5 transition-all"
            >
              <p className="text-gray-900 font-semibold text-lg">{item.nombre}</p>
              <p className="text-gray-600">{item.puesto}</p>
              <p className="text-gray-600">Vuelos: {item.vuelos}</p>
              <p className="text-gray-900 font-bold text-xl mt-2">${item.neto.toFixed(2)} USD</p>

              {/* Detalles siempre visibles */}
              <div className="text-sm text-gray-700 mt-4 space-y-1">
                <p><strong>Base:</strong> ${item.base}</p>
                <p><strong>Pago por vuelos:</strong> ${item.pagoVuelos}</p>
                <p><strong>Descuento (10%):</strong> -${item.descuento.toFixed(2)}</p>
                <p><strong>Prestaciones (5%):</strong> +${item.prestaciones.toFixed(2)}</p>
              </div>

              {/* Botones */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-sm bg-black hover:bg-gray-800 text-white px-3 py-1 rounded-lg transition"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-sm bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded-lg transition"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nominas;

