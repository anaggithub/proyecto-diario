import React, { useState } from "react";
import "../styles/styles.scss";

function Header() {
  const [searchInputOpen, setSearchInputOpen] = useState(false);
  const searchInputDisplay = !searchInputOpen ? "none" : "block";

  return (
    <header className="header">
      <Nav />
      <Logo />
      <SearchInput />
    </header>
  );

  //A continuacion, cada uno de los 3 componentes del header:
  //COMPONENTE NAVBAR
  function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    const iconClass = !navOpen ? "fas fa-bars" : "fas fa-times";
    const navDisplay = !navOpen ? "none" : "block";
    //  console.log(navOpen);

    return (
      <nav className="nav" onClick={() => setNavOpen(!navOpen)}>
        <i className={iconClass}></i>
        <ul className="nav--list" style={{ display: navDisplay }}>
          <li>Últimas noticias</li>
          <li>Política</li>
          <li>Sociedad</li>
          <li>Deportes</li>
          <li>Techno</li>
          <li>Docs</li>
          <li>Campo</li>
          <li>Tendencias</li>
          <li>Vidriera</li>
          <li>Personajes</li>
        </ul>
      </nav>
    );
  }

  //COMPONENTE LOGO
  function Logo() {
    const logoDisplay = searchInputOpen ? "none" : "block";
    return (
      <figure style={{ display: logoDisplay }}>
        <img
          src="https://www.infobae.com/resources/assets/img/logo_infobae_naranja.svg"
          alt="logo"
          className="logo"
        />
      </figure>
    );
  }

  //COMPONENTE BUSCADOR
  function SearchInput() {
    return (
      <form className="searchform" method="get">
        <input type="text" style={{ display: searchInputDisplay }}></input>
        <button
          type="submit"
          className="button--icon"
          onClick={(e) => {
            e.preventDefault();
            setSearchInputOpen(!searchInputOpen);
          }}
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default Header;
