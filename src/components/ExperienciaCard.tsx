import type { Experiencia } from "../types/experiencia";

interface ExperienciaCardProps {
  experiencia: Experiencia;
}

function calcularDuracion(inicio: Date, final: Date) {
  let meses =
    (final.getUTCFullYear() - inicio.getUTCFullYear()) * 12 +
    final.getUTCMonth() -
    inicio.getUTCMonth();

  if (final.getUTCDate() < inicio.getUTCDate()) {
    meses -= 1;
  }

  const anos = Math.floor(meses / 12);
  const mesesRestantes = meses % 12;

  return (
    [
      anos > 0 ? `${anos} ${anos === 1 ? "año" : "años"}` : null,
      mesesRestantes > 0
        ? `${mesesRestantes} ${mesesRestantes === 1 ? "mes" : "meses"}`
        : null,
    ]
      .filter(Boolean)
      .join(" y ") || "Menos de un mes"
  );
}

function ExperienciaCard({ experiencia }: ExperienciaCardProps) {
  return (
    <article className="experiencia">
      <div className="experiencia__contenido">
        <div className="experiencia__encabezado">
          <h3>{experiencia.nombreEmpresa}</h3>
          <p className="experiencia__lugar"> - {experiencia.lugar}</p>
        </div>
        <p className="experiencia__tiempo">
          {calcularDuracion(experiencia.inicio, experiencia.final)}
        </p>
        <p className="experiencia__organizacion">{experiencia.resumen}</p>
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
              <li className="experiencia__tecnologia" key={tecnologia}>
                {tecnologia}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienciaCard;
