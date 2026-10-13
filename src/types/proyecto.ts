export interface Proyecto {
  nombre: string;
  organizacion: string;
  resumen: string;
  imagen: string;
  imagenAlt: string;
  repositorio?: string;
  tipo: string;
  funcionalidades: {
    titulo: string;
    descripcion: string;
  }[];
  tecnologias: string[];
}
