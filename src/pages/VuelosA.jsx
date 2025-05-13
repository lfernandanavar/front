// src/pages/VuelosA.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const VuelosA = () => {
  const [vuelos, setVuelos] = useState([]);
  const [formData, setFormData] = useState({
    origen: "",
    destino: "",
    fecha: "",
    hora: "",
    avion: "",
    precio: "",
    piloto: "",
    copiloto: "",
    azafata1: "",
    azafata2: "",
    azafata3: "",
    imagen: null // Cambié la imagen a un estado de archivo
  });

  const [editIndex, setEditIndex] = useState(null);

  // Opciones para el avión, piloto, copiloto y azafatas
  const aviones = ["Avión A", "Avión B", "Avión C"];
  const pilotos = ["Piloto A", "Piloto B", "Piloto C"];
  const copilotos = ["Copiloto A", "Copiloto B", "Copiloto C"];
  const azafatas = ["Azafata 1", "Azafata 2", "Azafata 3"];

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejador para la carga de la imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, imagen: URL.createObjectURL(file) }); // Crea un objeto URL temporal para mostrar la imagen
    }
  };

  // Crear o actualizar vuelo
  const handleSubmit = (e) => {
    e.preventDefault();

    // Confirmar actualización
    if (editIndex !== null) {
      const confirmUpdate = window.confirm("¿Estás seguro de que deseas actualizar este vuelo?");
      if (confirmUpdate) {
        const vuelosActualizados = [...vuelos];
        vuelosActualizados[editIndex] = formData;
        setVuelos(vuelosActualizados);
        setEditIndex(null);
        setFormData({
          origen: "",
          destino: "",
          fecha: "",
          hora: "",
          avion: "",
          precio: "",
          piloto: "",
          copiloto: "",
          azafata1: "",
          azafata2: "",
          azafata3: "",
          imagen: null // Limpiar el campo de imagen después de agregar el vuelo
        });
      }
    } else {
      setVuelos([...vuelos, formData]);
      setFormData({
        origen: "",
        destino: "",
        fecha: "",
        hora: "",
        avion: "",
        precio: "",
        piloto: "",
        copiloto: "",
        azafata1: "",
        azafata2: "",
        azafata3: "",
        imagen: null // Limpiar el campo de imagen después de agregar el vuelo
      });
    }
  };

  // Eliminar vuelo con confirmación
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este vuelo?");
    if (confirmDelete) {
      const nuevosVuelos = vuelos.filter((_, i) => i !== index);
      setVuelos(nuevosVuelos);
    }
  };

  // Editar vuelo
  const handleEdit = (index) => {
    setFormData(vuelos[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar de administrador */}
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/homea" className="text-2xl font-bold hover:text-gray-400">
            Panel Administrador
          </Link>
          <p className="text-gray-400 text-sm">Gestión general del sistema</p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">

        {/* Título alineado a la izquierda */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">Gestión de Vuelos</h1>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-6 mb-12"
        >
          <input
            type="text"
            name="origen"
            placeholder="Origen"
            value={formData.origen}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <input
            type="text"
            name="destino"
            placeholder="Destino"
            value={formData.destino}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <select
            name="avion"
            value={formData.avion}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="">Seleccionar Avión</option>
            {aviones.map((avion, index) => (
              <option key={index} value={avion}>{avion}</option>
            ))}
          </select>
          <input
            type="number"
            name="precio"
            placeholder="Precio USD"
            value={formData.precio}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <select
            name="piloto"
            value={formData.piloto}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="">Seleccionar Piloto</option>
            {pilotos.map((piloto, index) => (
              <option key={index} value={piloto}>{piloto}</option>
            ))}
          </select>
          <select
            name="copiloto"
            value={formData.copiloto}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="">Seleccionar Copiloto</option>
            {copilotos.map((copiloto, index) => (
              <option key={index} value={copiloto}>{copiloto}</option>
            ))}
          </select>
          <div className="grid md:grid-cols-3 gap-4">
            <select
              name="azafata1"
              value={formData.azafata1}
              onChange={handleChange}
              required
              className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="">Azafata 1</option>
              {azafatas.map((azafata, index) => (
                <option key={index} value={azafata}>{azafata}</option>
              ))}
            </select>
            <select
              name="azafata2"
              value={formData.azafata2}
              onChange={handleChange}
              required
              className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="">Azafata 2</option>
              {azafatas.map((azafata, index) => (
                <option key={index} value={azafata}>{azafata}</option>
              ))}
            </select>
            <select
              name="azafata3"
              value={formData.azafata3}
              onChange={handleChange}
              required
              className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="">Azafata 3</option>
              {azafatas.map((azafata, index) => (
                <option key={index} value={azafata}>{azafata}</option>
              ))}
            </select>
          </div>
          <input
            type="file"
            name="imagen"
            onChange={handleImageChange}
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white py-4 rounded-md mt-6 w-full"
          >
            {editIndex !== null ? "Actualizar Vuelo" : "Agregar Vuelo"}
          </button>
        </form>

        {/* Lista de vuelos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vuelos.length === 0 ? (
            <p className="text-gray-600 text-center">No hay vuelos registrados.</p>
          ) : (
            vuelos.map((vuelo, index) => (
              <div
                key={index}
                className="bg-gray-200 border border-gray-300 rounded-lg p-4 shadow-md"
              >
                {vuelo.imagen && (
                  <img
                    src={vuelo.imagen}
                    alt="Avión"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-900">{vuelo.origen} a {vuelo.destino}</h3>
                <p className="text-gray-600">Fecha: {vuelo.fecha} | Hora: {vuelo.hora}</p>
                <p className="text-gray-600">Precio: ${vuelo.precio}</p>
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VuelosA;
