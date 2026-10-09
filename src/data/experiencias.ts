import type { Experiencia } from "../types/experiencia";

 /* Plantilla para añadir nueva experiencia:
 {
    nombreEmpresa:"" ,
    resumen: "",
    inicio:"" ,
    final:"" ,
    lugar:"" ,
    funcionalidades: [
      {
        titulo: "",
        descripcion:"" ,
      }
    ],
    tecnologias: [
       "",
       "" 
    ] ,
  },
 */

export const experiencias: Experiencia[] = [
    // Turku Vocational Institute
  {
    nombreEmpresa:"Turku Vocational Institute" ,
    resumen: "Desarrollador web Full-Stack",
    inicio:new Date("2026-03-01") ,
    final:new Date("2026-06-01") ,
    lugar:"Turku, Finland" ,
    funcionalidades: [
      {
        titulo: "Gestion de pedidos",
        descripcion:"Implementación de un sistema para consultar, buscar, filtrar y actualizar pedidos, incluyendo su estado, precio y situación de pago." ,
      },
      {
        titulo: "Seguimiento de pedidos",
        descripcion:"Creación de una funcionalidad que permite a los clientes consultar el estado de sus pedidos mediante su número de pedido y teléfono, mostrando información relevante como las fechas, el contenido y el precio." ,
      },
      {
        titulo: "Gestión de clientes",
        descripcion:"Desarrollo de un módulo para consultar, buscar y administrar los clientes, centralizando su información dentro de la aplicación." ,
      },
      {
        titulo: "Informes y estadísticas de ingresos",
        descripcion:"Integración de gráficos interactivos con Chart.js para visualizar los ingresos semanales y consultar la evolución de la facturación por meses." ,
      },
    ],
    tecnologias: [
       "PHP 8.2",
       "Symfony 7",
       "MySQL 8",
       "Doctrine ORM",
       "Twig",
       "Trabajo en Equipo",
       "Control de versiones con Git",
       "Metodologías ágiles",
       "Docker",
       "TypeScript",
       "React",
       "Responsive Design",
       "Responabilidad y accesibilidad web", 
    ] ,
  },
]