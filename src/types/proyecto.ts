export interface Proyecto {
  nombre: string;
  resumen: string;
  imagen: string;
  imagenAlt: string;
  tipo: string;
  funcionalidades: {
    titulo: string;
    descripcion: string;
  }[];
  tecnologias: string[];
}
