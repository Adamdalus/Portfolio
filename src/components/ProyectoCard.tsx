import { useRef } from "react";
import type { Proyecto } from "../types/proyecto";

interface ProyectoCardProps {
  proyecto: Proyecto;
}

function ProyectoCard({ proyecto }: ProyectoCardProps) {
  const imagenAmpliadaRef = useRef<HTMLDialogElement>(null);

  return (
    <article className="proyecto">
      <div className="proyecto__visual">
        <button
          className="proyecto__imagen-boton"
          type="button"
          aria-label={`Ampliar imagen: ${proyecto.nombre}`}
          onClick={() => imagenAmpliadaRef.current?.showModal()}
        >
          <img
            className="proyecto__imagen"
            src={proyecto.imagen}
            alt={proyecto.imagenAlt}
          />
          <span className="proyecto__imagen-ayuda">Ver imagen ampliada</span>
        </button>
        <span className="proyecto__tipo">{proyecto.tipo}</span>
      </div>
      <dialog
        className="proyecto__dialogo"
        aria-label={`Vista ampliada: ${proyecto.nombre}`}
        ref={imagenAmpliadaRef}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
      >
        <button
          className="proyecto__cerrar"
          type="button"
          aria-label="Cerrar imagen ampliada"
          onClick={() => imagenAmpliadaRef.current?.close()}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <img src={proyecto.imagen} alt={proyecto.imagenAlt} />
      </dialog>
      <div className="proyecto__contenido">
        <h3>{proyecto.nombre}</h3>
        <p className="proyecto__organizacion">{proyecto.organizacion}</p>
        <p className="proyecto__resumen">{proyecto.resumen}</p>
        {proyecto.repositorio && (
          <a
            className="proyecto__repositorio"
            href={proyecto.repositorio}
            target="_blank"
            rel="noreferrer"
          >
            Ver repositorio <span aria-hidden="true">↗</span>
          </a>
        )}
        <div className="proyecto__funcionalidades">
          {proyecto.funcionalidades.map((funcionalidad) => (
            <section key={funcionalidad.titulo}>
              <h4>{funcionalidad.titulo}</h4>
              <p>{funcionalidad.descripcion}</p>
            </section>
          ))}
        </div>
        <div className="proyecto__stack">
          <h4>Tecnologías</h4>
          <ul className="proyecto__tecnologias">
            {proyecto.tecnologias.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ProyectoCard;
