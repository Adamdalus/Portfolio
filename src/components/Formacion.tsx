import { useRef } from "react";
import { formacion } from "../data/formacion";
import useTimelineProgress from "../hooks/useTimelineProgress";
import FormacionCard from "./FormacionCard";

const formatearMesYAnio = new Intl.DateTimeFormat("es-ES", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function Formacion() {
  const timelineRef = useRef<HTMLOListElement>(null);
  useTimelineProgress(timelineRef);

  return (
    <section
      className="formacion"
      id="formacion"
      aria-labelledby="formacion-titulo"
    >
      <div className="formacion__contenido">
        <h2 id="formacion-titulo">Formación</h2>
        <ol className="timeline" ref={timelineRef}>
          {formacion.map((item) => (
            <li className="timeline__item" key={item.titulo}>
              <div className="timeline__fechas">
                {item.inicio && item.final ? (
                  <>
                    <time dateTime={item.inicio.toISOString().slice(0, 10)}>
                      {formatearMesYAnio.format(item.inicio)}
                    </time>
                    <span aria-hidden="true">—</span>
                    <time dateTime={item.final.toISOString().slice(0, 10)}>
                      {formatearMesYAnio.format(item.final)}
                    </time>
                  </>
                ) : (
                  <span>Formación complementaria</span>
                )}
              </div>
              <FormacionCard formacion={item} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Formacion;
