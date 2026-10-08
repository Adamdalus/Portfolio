import { experiencias } from "../data/experiencias";
import ExperienciaCard from "./ExperienciaCard";

function Experiencias() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-titulo">
  <h2 id="experiencia-titulo">Experiencia</h2>
  <ol className="timeline">
    {experiencias.map((experiencia) => (
      <li key={experiencia.nombreEmpresa}>
        <ExperienciaCard experiencia={experiencia} />
      </li>
    ))}
  </ol>
</section>
  );
}

export default Experiencias;