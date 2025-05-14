import React, { useRef } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Reportes = () => {
  const reportRef = useRef();

  const datosTotales = {
    semanal: { reservaciones: 25, clientes: 20, vuelos: 12 },
    mensual: { reservaciones: 112, clientes: 98, vuelos: 50 },
    anual: { reservaciones: 1325, clientes: 1045, vuelos: 650 },
  };

  const precioReservacion = 150;

  const clientesRegistrados = [
    { nombre: "Carlos Mendoza", correo: "carlos@example.com", reservaciones: 5 },
    { nombre: "Ana López", correo: "ana@example.com", reservaciones: 8 },
    { nombre: "Mario Ruiz", correo: "mario@example.com", reservaciones: 2 },
    { nombre: "Laura Pérez", correo: "laura@example.com", reservaciones: 4 },
  ];

  const calcularVentas = (reservaciones) => reservaciones * precioReservacion;

  const handleDownloadPDF = async () => {
    const input = reportRef.current;

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;

    if (imgHeight < pageHeight) {
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    } else {
      let heightLeft = imgHeight;

      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;
        if (heightLeft > 0) pdf.addPage();
      }
    }

    pdf.save("reporte_sistema.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar de administrador */}
      <header className="bg-gray-900 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/homea" className="text-2xl font-bold hover:text-gray-400">
            Panel Administrador
          </Link>
          <p className="text-gray-400 text-sm">Gestión general del sistema</p>
        </div>
      </header>

      {/* Contenido */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Reportes del Sistema</h1>
          <button
            onClick={handleDownloadPDF}
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Descargar en PDF
          </button>
        </div>

        {/* Reporte general */}
        <div
          ref={reportRef}
          className="bg-white p-8 rounded-lg text-gray-900 max-w-7xl mx-auto"
        >
          {/* Reportes por periodo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Object.entries(datosTotales).map(([periodo, datos]) => (
              <div
                key={periodo}
                className="bg-gray-100 p-6 rounded-2xl shadow-md border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-900 capitalize mb-4">
                  {periodo}
                </h2>
                <p className="text-gray-600">Reservaciones: {datos.reservaciones}</p>
                <p className="text-gray-600">Clientes: {datos.clientes}</p>
                <p className="text-gray-600 mb-2">Vuelos: {datos.vuelos}</p>
                <p className="text-black font-bold">
                  Total de ventas: ${calcularVentas(datos.reservaciones).toLocaleString()} USD
                </p>
              </div>
            ))}
          </div>

          {/* Clientes registrados */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Clientes Registrados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {clientesRegistrados.map((cliente, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition"
                >
                  <p className="text-gray-900 font-medium">{cliente.nombre}</p>
                  <p className="text-gray-600 text-sm">{cliente.correo}</p>
                  <p className="text-gray-600 text-sm">
                    Reservaciones: {cliente.reservaciones}
                  </p>
                  <p className="text-gray-800 font-semibold text-sm mt-1">
                    Total gastado: ${calcularVentas(cliente.reservaciones).toLocaleString()} USD
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reportes;
