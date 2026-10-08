function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#inicio" aria-label="Adam Al-Sikhan Benito, inicio">
          <span className="brand__mark" aria-hidden="true">A</span>
          <span className="brand__name">Adam Al-Sikhan Benito</span>
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          <a className="site-nav__link" href="#sobre-mi">Sobre mí</a>
          <a className="site-nav__link" href="#tecnologias">Tecnologías</a>
          <a className="site-nav__link" href="#proyectos">Proyectos</a>
          <a className="site-nav__link" href="#formacion">Formación</a>
          <a className="site-nav__link" href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;