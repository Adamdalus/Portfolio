import foto from "../assets/FotoPortfolio.png";

function Presentacion() {
  return (
    <section
      className="presentacion"
      id="inicio"
      aria-labelledby="presentacion-titulo"
    >
      <div className="presentacion__contenido">
        <figure className="presentacion__foto">
          <img src={foto} alt="Retrato profesional de Adam Al-Sikhan Benito" />
        </figure>

        <div className="presentacion__descripcion" id="sobre-mi">
          <p className="presentacion__saludo">Hola, soy Adam</p>
          <h1 id="presentacion-titulo">
            Desarrollador web
            <span> full-stack</span>
          </h1>
          <p className="presentacion__texto">
            Técnico Superior en Desarrollo de Aplicaciones Web, con experiencia
            práctica adquirida durante mis prácticas Erasmus en Finlandia. He
            creado aplicaciones web full-stack e interfaces responsive, y
            trabajado con APIs REST y bases de datos. Busco incorporarme como
            desarrollador junior, seguir aprendiendo y aportar a un equipo
            técnico.
          </p>

          <a
            className="presentacion__repositorio"
            href="https://github.com/Adamdalus/Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Ver código del portfolio en GitHub <span aria-hidden="true">↗</span>
          </a>

          <div className="presentacion__tecnologias" id="tecnologias">
            <h2>Tecnologías con las que trabajo</h2>
            <ul className="tecnologias-lista" aria-label="Tecnologías">
              <li>React</li>
              <li>TypeScript</li>
              <li>Java</li>
              <li>PHP</li>
              <li>JavaScript</li>
              <li>Symfony</li>
              <li>Laravel</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>Git/GitHub</li>
              <li>CI/CD</li>
              <li>Docker</li>
            </ul>
          </div>

          <a className="presentacion__boton" href="#contacto">
            Contáctame <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Presentacion;
