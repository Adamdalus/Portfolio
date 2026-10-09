import type { FormacionItem } from "../types/formacion";

export const formacion: FormacionItem[] = [
  {
    titulo: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
    institucion: "IES Clara del Rey",
    inicio: new Date("2024-09-01"),
    final: new Date("2026-06-01"),
    ubicacion: "Madrid",
    detalles: [
      "Desarrollo frontend con HTML, CSS y JavaScript.",
      "Desarrollo backend con PHP, Java y Node.js.",
      "Diseño y gestión de bases de datos con MySQL y SQL.",
      "Control de versiones y despliegue mediante Docker y Apache.",
      "Trabajo con Linux, Ubuntu y máquinas virtuales.",
      "Mantenimiento y reparación de equipos informáticos y redes.",
    ],
  },
  {
    titulo: "Certificado de curso de Clean Code",
    institucion: "OpenWebinars",
    detalles: [
      "Clean Code, refactorización, patrones de diseño y principios SOLID.",
      "Buenas prácticas para escribir código limpio, mantenible y eficiente.",
      "Mejora de la estructura, legibilidad y escalabilidad del código.",
    ],
  },
  {
    titulo: "Certificado de curso de Ciberseguridad",
    institucion: "OpenWebinars",
    detalles: [
      "Seguridad de redes en el ámbito corporativo.",
      "Capa 2 del modelo OSI aplicada a redes corporativas.",
    ],
  },
];
