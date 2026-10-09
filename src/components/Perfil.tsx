import { certificaciones, idiomas } from "../data/perfil";

function Perfil() {
  return (
    <section className="perfil" aria-label="Idiomas y certificaciones">
      <div className="perfil__contenido">
        <section className="perfil__bloque" id="idiomas" aria-labelledby="idiomas-titulo">
          <h2 id="idiomas-titulo">Idiomas</h2>
          <ul className="perfil__lista">
            {idiomas.map((idioma) => (
              <li className="perfil__elemento" key={idioma.nombre}>
                <span>{idioma.nombre}</span>
                <span className="perfil__detalle">{idioma.nivel}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="perfil__bloque"
          id="certificaciones"
          aria-labelledby="certificaciones-titulo"
        >
          <h2 id="certificaciones-titulo">Certificaciones</h2>
          <ul className="perfil__lista">
            {certificaciones.map((certificacion) => (
              <li className="perfil__elemento" key={certificacion}>
                {certificacion}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Perfil;
