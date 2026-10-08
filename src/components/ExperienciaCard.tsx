import { useRef } from "react";
import type { Experiencia } from "../types/experiencia";

interface ExperienciaCardProps {
  experiencia: Experiencia;
}

function ExperienciaCard({ experiencia }: ExperienciaCardProps) {
  const imagenAmpliadaRef = useRef<HTMLDialogElement>(null);

  return (
    <article className="experiencia">

      <div className="experiencia__contenido">
        <h3>{experiencia.nombreEmpresa}</h3>
        <p className="experiencia__organizacion">{experiencia.resumen}</p>
        <p className="experiencia__inicio">{experiencia.inicio.getDate()}</p>
        <p className="experiencia__final">{experiencia.final.getDate()}</p>
        // SEGUIR AQUIIIIII
        <p className="experiencia__tiempo">{experiencia.inicio.getDate() - experiencia.final.getDate()}</p>
        <div className="experiencia__funcionalidades">
          {experiencia.funcionalidades.map((funcionalidad) => (
            <section key={funcionalidad.titulo}>
              <h4>{funcionalidad.titulo}</h4>
              <p>{funcionalidad.descripcion}</p>
            </section>
          ))}
        </div>
        <div className="experiencia__stack">
          <h4>Tecnologías</h4>
          <ul className="experiencia__tecnologias">
            {experiencia.tecnologias.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienciaCard;