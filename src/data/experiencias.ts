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
        titulo: "",
        descripcion:"" ,
      }
    ],
    tecnologias: [
       "",
       "" 
    ] ,
  },
]