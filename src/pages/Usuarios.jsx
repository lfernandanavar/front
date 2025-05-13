// src/pages/UsuariosA.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UsuariosA = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    rol: "",
    imagen: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  // Opciones de roles
  const roles = ["Administrador", "Piloto", "Azafata", "Copiloto"];

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Crear o actualizar usuario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Confirmar actualización
    if (editIndex !== null) {
      const confirmUpdate = window.confirm("¿Estás seguro de que deseas actualizar este usuario?");
      if (confirmUpdate) {
        const usuariosActualizados = [...usuarios];
        usuariosActualizados[editIndex] = formData;
        setUsuarios(usuariosActualizados);
        setEditIndex(null);
        setFormData({
          nombre: "",
          correo: "",
          rol: "",
          imagen: "",
        });
      }
    } else {
      setUsuarios([...usuarios, formData]);
      setFormData({
        nombre: "",
        correo: "",
        rol: "",
        imagen: "",
      });
    }
  };

  // Eliminar usuario con confirmación
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");
    if (confirmDelete) {
      const nuevosUsuarios = usuarios.filter((_, i) => i !== index);
      setUsuarios(nuevosUsuarios);
    }
  };

  // Editar usuario
  const handleEdit = (index) => {
    setFormData(usuarios[index]);
    setEditIndex(index);
  };

  // Subir imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, imagen: URL.createObjectURL(file) });
    }
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

        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Gestión de Usuarios</h1>

        {/* Formulario de usuario */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-6 mb-12"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del Usuario"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo Electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="rol"
            value={formData.rol}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccionar Rol</option>
            {roles.map((rol, index) => (
              <option key={index} value={rol}>{rol}</option>
            ))}
          </select>

          {/* Subir imagen de usuario */}
          <input
            type="file"
            name="imagen"
            onChange={handleImageChange}
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {formData.imagen && (
            <div className="mt-4">
              <img src={formData.imagen} alt="Imagen de Usuario" className="w-32 h-32 object-cover rounded-full" />
            </div>
          )}

          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white py-4 rounded-md mt-6 w-full"
          >
            {editIndex !== null ? "Actualizar Usuario" : "Agregar Usuario"}
          </button>
        </form>

        {/* Lista de usuarios en formato de cuadritos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {usuarios.length === 0 ? (
            <p className="text-gray-600 text-center">No hay usuarios registrados.</p>
          ) : (
            usuarios.map((usuario, index) => (
              <div
                key={index}
                className="bg-gray-100 border border-gray-200 rounded-lg shadow-md p-6"
              >
                <div className="flex justify-center mb-4">
                  {usuario.imagen ? (
                    <img
                      src={usuario.imagen}
                      alt="Imagen de Usuario"
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">Sin Imagen</div>
                  )}
                </div>
                <p><strong>Nombre:</strong> {usuario.nombre}</p>
                <p><strong>Correo:</strong> {usuario.correo}</p>
                <p><strong>Rol:</strong> {usuario.rol}</p>

                <div className="mt-4 flex justify-between gap-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
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

export default UsuariosA;
