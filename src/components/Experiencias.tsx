import { useRef } from "react";
import { experiencias } from "../data/experiencias";
import useTimelineProgress from "../hooks/useTimelineProgress";
import ExperienciaCard from "./ExperienciaCard";

const formatearMesYAnio = new Intl.DateTimeFormat("es-ES", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function Experiencias() {
  const timelineRef = useRef<HTMLOListElement>(null);
  useTimelineProgress(timelineRef);

  return (
    <section
      className="experiencias"
      id="experiencia"
      aria-labelledby="experiencia-titulo"
    >
      <div className="experiencias__contenido">
        <h2 id="experiencia-titulo">Experiencia</h2>
        <ol className="timeline" ref={timelineRef}>
          {experiencias.map((experiencia) => (
            <li
              className="timeline__item"
              key={`${experiencia.nombreEmpresa}-${experiencia.inicio.getTime()}`}
            >
              <div className="timeline__fechas">
                <time dateTime={experiencia.inicio.toISOString().slice(0, 10)}>
                  {formatearMesYAnio.format(experiencia.inicio)}
                </time>
                <span aria-hidden="true">—</span>
                <time dateTime={experiencia.final.toISOString().slice(0, 10)}>
                  {formatearMesYAnio.format(experiencia.final)}
                </time>
              </div>
              <ExperienciaCard experiencia={experiencia} />
            </li>
          ))}
          <li className="timeline__item">
            <span className="timeline__continuara">Continuará...</span>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Experiencias;