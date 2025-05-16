import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { FiChevronRight } from 'react-icons/fi';
import cdmxImg from "../assets/vuelos/cdmx.jpg";
import cancunImg from "../assets/vuelos/cancun.jpg";
import monterreyImg from "../assets/vuelos/monterrey.jpg";
import meridaImg from "../assets/vuelos/merida.jpg";
import pueblaImg from "../assets/vuelos/puebla.jpg";
import guadalajaraImg from "../assets/vuelos/guadalajara.jpg";
import veracruzImg from "../assets/vuelos/veracruz.jpg";
import tijuanaImg from "../assets/vuelos/tijuana.jpg";
import { useMemo } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  // Datos de vuelos
  const vuelos = [
    { destino: "CDMX", precio: "$1,299 MXN", img: cdmxImg, fecha: "15/06/2025", asientos: 25, avion: "Airbus A320" },
    { destino: "Cancún", precio: "$1,899 MXN", img: cancunImg, fecha: "20/06/2025", asientos: 18, avion: "Boeing 737" },
    { destino: "Monterrey", precio: "$1,499 MXN", img: monterreyImg, fecha: "22/06/2025", asientos: 30, avion: "Embraer 190" },
    { destino: "Mérida", precio: "$1,099 MXN", img: meridaImg, fecha: "25/06/2025", asientos: 22, avion: "Airbus A319" },
    { destino: "Puebla", precio: "$999 MXN", img: pueblaImg, fecha: "18/06/2025", asientos: 28, avion: "CRJ 700" },
    { destino: "Guadalajara", precio: "$1,399 MXN", img: guadalajaraImg, fecha: "21/06/2025", asientos: 16, avion: "Boeing 737 MAX" },
    { destino: "Veracruz", precio: "$1,099 MXN", img: veracruzImg, fecha: "19/06/2025", asientos: 27, avion: "Airbus A320neo" },
    { destino: "Tijuana", precio: "$1,599 MXN", img: tijuanaImg, fecha: "23/06/2025", asientos: 20, avion: "Boeing 757" },
  ];

  // Mostrar solo los primeros 4 vuelos en la página principal
  const vuelosPrincipales = vuelos.slice(0, 4);

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Bienvenida */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-100 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bienvenido a <span className="text-black">Aerolínea</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Descubre el placer de volar con nosotros. Vuelos increíbles, precios accesibles, y atención excepcional.
        </motion.p>
      </section>

      {/* Vuelos */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Destinos Populares</h2>
            <button 
              onClick={() => navigate("/destinos")}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver más destinos <FiChevronRight className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {vuelosPrincipales.map((vuelo, i) => (
              <motion.div
                key={i}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Tarjeta principal */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img src={vuelo.img} alt={vuelo.destino} className="w-full h-48 object-cover" />
                  <div className="p-5 space-y-2">
                    <h3 className="text-2xl font-semibold">{vuelo.destino}</h3>
                    <p className="text-gray-500">Desde: {vuelo.precio}</p>
                  </div>
                </div>

                {/* Ventana flotante */}
                <div
                  onClick={() => navigate("/reservar")}
                  className="absolute top-1/2 left-1/2 w-64 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-4 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
                >
                  <h4 className="text-lg font-semibold mb-2">Detalles del vuelo</h4>
                  <p><span className="font-medium">Destino:</span> {vuelo.destino}</p>
                  <p><span className="font-medium">Fecha:</span> {vuelo.fecha}</p>
                  <p><span className="font-medium">Asientos disponibles:</span> {vuelo.asientos}</p>
                  <p><span className="font-medium">Avión:</span> {vuelo.avion}</p>
                  <p className="text-center mt-3 text-sm text-blue-600 font-medium hover:underline">
                    Hacer reservación
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">¿Por qué elegirnos?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Brindamos una experiencia única con altos estándares de calidad, atención personalizada y compromiso con la seguridad.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { titulo: "✈️ Vuelos seguros", texto: "Nuestros aviones cumplen con los más altos estándares internacionales." },
            { titulo: "💼 Equipaje incluido", texto: "Incluimos equipaje documentado y de mano sin costo adicional." },
            { titulo: "🎫 Tarifas justas", texto: "Precios accesibles y sin cargos ocultos." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
              <p className="text-gray-600">{item.texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comentarios */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Nuestros Clientes Opinan</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
            {
              useMemo(() => {
                const comentarios = [
                  { name: "Juan Pérez", review: "Excelente servicio y puntualidad. ¡Repetiré sin duda!" },
                  { name: "Ana Gómez", review: "Una experiencia de vuelo muy cómoda y agradable." },
                  { name: "Carlos Díaz", review: "Tarifas justas y atención excepcional." },
                  { name: "Laura García", review: "Desde la compra hasta el aterrizaje, todo fue perfecto." },
                  { name: "Marta López", review: "Todo salió mejor de lo esperado. Muy recomendable." },
                  { name: "Pedro Sánchez", review: "El personal fue muy amable y servicial." },
                  { name: "Sofía Herrera", review: "Volveré a viajar con ustedes. Fue excelente." },
                  { name: "Luis Torres", review: "Muy buena relación calidad-precio." },
                ];

                // Mezclar aleatoriamente
                for (let i = comentarios.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [comentarios[i], comentarios[j]] = [comentarios[j], comentarios[i]];
                }

                // Devolver solo los primeros 4 comentarios
                return comentarios.slice(0, 4);
              }, [])
              .map((c, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4 hover:shadow-lg transition"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70) + 1}`}
                    alt={c.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{c.name}</h4>
                    <p className="text-gray-600 text-sm">{c.review}</p>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8 px-4">
        <p className="text-lg font-medium">¿Tienes dudas? Contáctanos: contacto@aerolinea.com</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Aerolínea. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;