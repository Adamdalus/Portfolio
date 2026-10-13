function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a className="site-footer__brand" href="#inicio">
          Adam Al-Sikhan Benito
        </a>
        <nav className="site-footer__nav" aria-label="Navegación del pie de página">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#formacion">Formación</a>
          <a href="#perfil">Idiomas y certificaciones</a>
          <a href="#contacto">Contacto</a>
          <a
            href="https://github.com/Adamdalus/Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Código del portfolio
          </a>
        </nav>
        <a className="site-footer__top" href="#inicio">
          Volver arriba <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
