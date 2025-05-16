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
import Navbar from "../components/Navbar";

const Destinos = () => {
  const navigate = useNavigate();

  // Datos de todos los vuelos
  const vuelos = [
    { destino: "Ciudad de México", precio: "$1,299 MXN", img: cdmxImg, fecha: "15/06/2025", asientos: 25, avion: "Airbus A320", descripcion: "La vibrante capital de México con su rica cultura, historia y gastronomía." },
    { destino: "Cancún", precio: "$1,899 MXN", img: cancunImg, fecha: "20/06/2025", asientos: 18, avion: "Boeing 737", descripcion: "Playas paradisíacas y aguas turquesas en el corazón del Caribe mexicano." },
    { destino: "Monterrey", precio: "$1,499 MXN", img: monterreyImg, fecha: "22/06/2025", asientos: 30, avion: "Embraer 190", descripcion: "Ciudad moderna rodeada de impresionantes montañas y excelente gastronomía." },
    { destino: "Mérida", precio: "$1,099 MXN", img: meridaImg, fecha: "25/06/2025", asientos: 22, avion: "Airbus A319", descripcion: "La ciudad blanca con encanto colonial y cercana a ruinas mayas." },
    { destino: "Puebla", precio: "$999 MXN", img: pueblaImg, fecha: "18/06/2025", asientos: 28, avion: "CRJ 700", descripcion: "Famosa por su arquitectura barroca, talavera y deliciosa comida tradicional." },
    { destino: "Guadalajara", precio: "$1,399 MXN", img: guadalajaraImg, fecha: "21/06/2025", asientos: 16, avion: "Boeing 737 MAX", descripcion: "Cuna del mariachi, tequila y una vibrante escena cultural." },
    { destino: "Veracruz", precio: "$1,099 MXN", img: veracruzImg, fecha: "19/06/2025", asientos: 27, avion: "Airbus A320neo", descripcion: "Puerto histórico con música, danzón y deliciosa gastronomía costeña." },
    { destino: "Tijuana", precio: "$1,599 MXN", img: tijuanaImg, fecha: "23/06/2025", asientos: 20, avion: "Boeing 757", descripcion: "Dinámica ciudad fronteriza con una escena artística y gastronómica en auge." },
    { destino: "Oaxaca", precio: "$1,199 MXN", img: cdmxImg, fecha: "28/06/2025", asientos: 24, avion: "Airbus A320", descripcion: "Capital cultural con tradiciones ancestrales y cocina reconocida mundialmente." },
    { destino: "Puerto Vallarta", precio: "$1,799 MXN", img: cancunImg, fecha: "30/06/2025", asientos: 15, avion: "Boeing 737", descripcion: "Pintoresco puerto con playas, montañas y un encantador centro histórico." },
    { destino: "Los Cabos", precio: "$2,099 MXN", img: monterreyImg, fecha: "02/07/2025", asientos: 12, avion: "Embraer 190", descripcion: "Destino de lujo donde el desierto se encuentra con el mar." },
    { destino: "Chihuahua", precio: "$1,349 MXN", img: meridaImg, fecha: "05/07/2025", asientos: 20, avion: "Airbus A319", descripcion: "Puerta de entrada a las Barrancas del Cobre y rica historia revolucionaria." }
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Encabezado */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Todos Nuestros Destinos
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Explora nuestra amplia selección de destinos en México con los mejores precios y servicios.
          </motion.p>
        </div>
      </section>

      {/* Listado de destinos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {vuelos.map((vuelo, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={vuelo.img} 
                    alt={vuelo.destino} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{vuelo.destino}</h3>
                  <p className="text-gray-500 mb-3">Desde: <span className="text-blue-600 font-medium">{vuelo.precio}</span></p>
                  <p className="text-gray-600 text-sm mb-4">{vuelo.descripcion}</p>
                  
                  <div className="mt-auto">
                    <button 
                      onClick={() => navigate("/reservar", { state: { vuelo } })}
                      className="w-full flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      <span>Reservar ahora</span>
                      <FiChevronRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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

export default Destinos;