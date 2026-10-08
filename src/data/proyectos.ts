import tintoreria from "../assets/tintoreria.png";
import sote from "../assets/sote.png";
import type { Proyecto } from "../types/proyecto";

/* Plantilla para añadir nuevo proyecto:
{
    nombre: "Nombre del proyecto",
    resumen:
      "Resumen del proyecto",
    imagen: tintoreria, --> Cambiar por la imagen del proyecto
    imagenAlt:
      "Imagen de la aplicación para tintorería",
    tipo: "Tipo de proyecto",
    funcionalidades: [
      {
        titulo: "Titulo de funcionalidad",
        descripcion:
          "Descripcion",
      },
      {
        titulo: "Titulo de funcionalidad",
        descripcion:
          "Descripcion",
      },
    ],
    tecnologias: [
      "tecnología 1",
      "tecnología 2",
      "tecnología 3",
    ],
  },
*/

export const proyectos: Proyecto[] = [
  // Tintorería previ
  {
    nombre: "Gestión integral para tintorería",
    organizacion: "Proyecto personal",
    resumen:
      "Proyecto de fin de grado: una aplicación web completa que digitaliza la gestión diaria de una tintorería, desde la atención al cliente hasta el control interno.",
    imagen: tintoreria,
    imagenAlt:
      "Página principal y sección de precios de la aplicación para tintorería",
    tipo: "Proyecto de fin de grado",
    funcionalidades: [
      {
        titulo: "Inicio",
        descripcion:
          "Información general sobre la tintorería, incluyendo servicios, precios y contacto.",
      },
      {
        titulo: "Panel de gestión",
        descripcion:
          "Permite a trabajadores y supervisores administrar pedidos, clientes y empleados, además de consultar ingresos mediante gráficos.",
      },
      {
        titulo: "Consulta de pedidos",
        descripcion:
          "Los clientes pueden consultar el estado de sus pedidos mediante un código único proporcionado al realizar el pedido.",
      },
      {
        titulo: "Calculadora de precios",
        descripcion:
          "Los clientes pueden calcular el precio de los servicios según sus necesidades.",
      },
    ],
    tecnologias: [
      "JavaScript",
      "PHP 8.2",
      "Doctrine ORM",
      "MySQL",
      "Twig",
      "Chart.js",
      "Symfony Mailer",
      "Symfony 7",
    ],
  },
  // Sote
  {
    nombre: "Sote",
    organizacion: "Turku Vocational Institute",
    resumen:
      "Aplicación web completa para la gestión de prueba de un hospital, destinada al uso de alumnos de prácticas de Enfermería.",
    imagen: sote,
    imagenAlt:
      "Imagen del proyecto",
    tipo: "Proyecto de prácticas en Finlandia",
    funcionalidades: [
      {
        titulo: "Gestión de pacientes",
        descripcion:
          "Permite a los alumnos registrar y gestionar la información de los pacientes, incluyendo historial médico y tratamientos.",
      },
      {
        titulo: "Gestión de alumnos y grupo de prácticas",
        descripcion:
          "Permite a los administradores gestionar la información de los alumnos y crear grupos de prácticas.",
      },
      {
        titulo: "Lista de espera",
        descripcion:
          "Funcionalidad que permite a los administradores registrar o rechazar a los alumnos nuevos que quieran regitrarse en un nuevo grupo de prácticas.",
      },
    ],
    tecnologias: [
      "React",
      "TypeScript",
      "Node.js",
      "Laravel",
      "MySQL",
      "Bootstrap",
      "GitHub",
      "APIs REST",
    ],
  },
];
