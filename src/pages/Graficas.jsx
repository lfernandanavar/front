import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Graficas = () => {
  const reportRef = useRef();

  // Datos estáticos
  const datosTotales = {
    semanal: { reservaciones: 25, clientes: 20, vuelos: 12 },
    mensual: { reservaciones: 112, clientes: 98, vuelos: 50 },
    anual: { reservaciones: 1325, clientes: 1045, vuelos: 650 },
  };

  const precioReservacion = 150;

  const clientesRegistrados = [
    { nombre: "Carlos Mendoza", reservaciones: 5 },
    { nombre: "Ana López", reservaciones: 8 },
    { nombre: "Mario Ruiz", reservaciones: 2 },
    { nombre: "Laura Pérez", reservaciones: 4 },
  ];

  const calcularVentas = (reservaciones) => reservaciones * precioReservacion;

  // Función para descargar PDF
  const handleDownloadPDF = async () => {
    const input = reportRef.current;
    
    // Configuración para mejorar la calidad del PDF
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

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("reporte_graficas.pdf");
  };

  // Configuración de gráficos con colores atractivos
  const ventasData = {
    labels: Object.keys(datosTotales).map(periodo => 
      periodo.charAt(0).toUpperCase() + periodo.slice(1)
    ),
    datasets: [
      {
        label: 'Ventas Totales (USD)',
        data: Object.values(datosTotales).map(datos => 
          calcularVentas(datos.reservaciones)
        ),
        backgroundColor: 'rgba(99, 102, 241, 0.7)',  // Indigo
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        borderRadius: 4
      },
      {
        label: 'Número de Reservaciones',
        data: Object.values(datosTotales).map(datos => datos.reservaciones),
        backgroundColor: 'rgba(16, 185, 129, 0.7)',  // Emerald
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        borderRadius: 4
      }
    ]
  };

  const clientesData = {
    labels: clientesRegistrados.map(cliente => cliente.nombre),
    datasets: [
      {
        label: 'Reservaciones por Cliente',
        data: clientesRegistrados.map(cliente => cliente.reservaciones),
        backgroundColor: [
          'rgba(244, 63, 94, 0.7)',   // Rose
          'rgba(59, 130, 246, 0.7)',   // Blue
          'rgba(234, 179, 8, 0.7)',    // Yellow
          'rgba(20, 184, 166, 0.7)'    // Teal
        ],
        borderColor: [
          'rgba(244, 63, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(234, 179, 8, 1)',
          'rgba(20, 184, 166, 1)'
        ],
        borderWidth: 2,
        hoverOffset: 15
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50" ref={reportRef}>
      {/* Navbar */}
      <header className="bg-gray-900 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/homea" className="text-2xl font-bold hover:text-gray-400 transition-colors">
            Panel Administrador
          </Link>
          <p className="text-gray-400 text-sm">Gestión general del sistema</p>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="p-6 md:p-8">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard de Ventas</h1>
            <p className="text-gray-600">Visualización de métricas y estadísticas</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button 
              onClick={handleDownloadPDF}
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar PDF
            </button>
          </div>
        </div>

        {/* Tarjetas resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(datosTotales).map(([periodo, datos]) => (
            <div key={periodo} className="bg-white p-6 rounded-lg shadow border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider">{periodo}</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                ${calcularVentas(datos.reservaciones).toLocaleString()}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>
                  <p>Reservaciones:</p>
                  <p className="font-medium text-gray-900">{datos.reservaciones}</p>
                </div>
                <div>
                  <p>Clientes:</p>
                  <p className="font-medium text-gray-900">{datos.clientes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gráfico de barras */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ventas por Período</h2>
            <div className="h-80">
              <Bar 
                data={ventasData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                      },
                      ticks: {
                        callback: function(value) {
                          if (this.getLabelForValue(value).includes('USD')) {
                            return '$' + value.toLocaleString();
                          }
                          return value;
                        }
                      }
                    },
                    x: {
                      grid: {
                        display: false
                      }
                    }
                  },
                  plugins: {
                    legend: {
                      position: 'top',
                      labels: {
                        boxWidth: 12,
                        padding: 20,
                        font: {
                          size: 12
                        }
                      }
                    },
                    tooltip: {
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      bodyFont: {
                        size: 13
                      },
                      callbacks: {
                        label: function(context) {
                          let label = context.dataset.label || '';
                          if (label.includes('USD')) {
                            return `${label}: $${context.raw.toLocaleString()}`;
                          }
                          return `${label}: ${context.raw}`;
                        }
                      }
                    }
                  }
                }} 
              />
            </div>
          </div>

          {/* Gráfico circular */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Distribución por Cliente</h2>
            <div className="h-80">
              <Pie 
                data={clientesData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'right',
                      labels: {
                        boxWidth: 12,
                        padding: 20,
                        font: {
                          size: 12
                        }
                      }
                    },
                    tooltip: {
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      bodyFont: {
                        size: 13
                      },
                      callbacks: {
                        label: function(context) {
                          const label = context.label || '';
                          const value = context.raw;
                          const total = context.dataset.data.reduce((a, b) => a + b, 0);
                          const percentage = Math.round((value / total) * 100);
                          return `${label}: ${value} reservas (${percentage}%)`;
                        }
                      }
                    }
                  }
                }} 
              />
            </div>
          </div>
        </div>

        {/* Tabla de clientes */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Detalle de Clientes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Cliente
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Reservaciones
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Total Gastado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clientesRegistrados.map((cliente, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-900 font-medium">
                            {cliente.nombre.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{cliente.nombre}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{cliente.reservaciones}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-800">
                        ${calcularVentas(cliente.reservaciones).toLocaleString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="bg-gray-900 text-white p-4 mt-8">
        <div className="container mx-auto text-center text-sm">
          <p>© {new Date().getFullYear()} Sistema de Administración. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Graficas;