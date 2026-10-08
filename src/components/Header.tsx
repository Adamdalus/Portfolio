function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#inicio" aria-label="Adam Al-Sikhan Benito, inicio">
          <span className="brand__mark" aria-hidden="true">A</span>
          <span className="brand__name">Adam Al-Sikhan Benito</span>
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          <a className="site-nav__link" href="#inicio">Inicio</a>
          <a className="site-nav__link" href="#sobre-mi">Sobre mí</a>
          <a className="site-nav__link site-nav__link--accent" href="#tecnologias">
            Tecnologías <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;