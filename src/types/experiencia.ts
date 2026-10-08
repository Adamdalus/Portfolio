export interface Experiencia {
  nombreEmpresa: string;
  resumen: string;
  inicio: Date;
  final: Date;
  lugar: string;
  funcionalidades: {
    titulo: string;
    descripcion: string;
  }[];
  tecnologias: string[];
}
