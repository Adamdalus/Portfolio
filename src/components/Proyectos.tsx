import { proyectos } from "../data/proyectos";
import ProyectoCard from "./ProyectoCard";

function Proyectos() {
  return (
    <section className="proyectos" id="proyectos" aria-labelledby="proyectos-titulo">
      <div className="proyectos__contenido">
        <header className="proyectos__encabezado">
          <p className="proyectos__eyebrow">Selección de trabajos</p>
          <h2 id="proyectos-titulo">Un proyecto de principio a fin</h2>
        </header>
        <div className="proyectos__lista">
          {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.nombre} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;