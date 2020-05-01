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

  function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    const iconClass = !navOpen ? "fas fa-bars" : "fas fa-times";
    const navDisplay = !navOpen ? "none" : "block";

    return (
      <nav className="nav" onClick={() => setNavOpen(!navOpen)}>
        <i className={`nav--icon ${iconClass}`}></i>
        <ul className="nav--list" style={{ display: navDisplay }}>
          <li className="nav--list--element">Últimas noticias</li>
          <li className="nav--list--element">Política</li>
          <li className="nav--list--element">Sociedad</li>
          <li className="nav--list--element">Deportes</li>
          <li className="nav--list--element">Techno</li>
          <li className="nav--list--element">Docs</li>
          <li className="nav--list--element">Campo</li>
          <li className="nav--list--element">Tendencias</li>
          <li className="nav--list--element">Vidriera</li>
          <li className="nav--list--element">Personajes</li>
        </ul>
      </nav>
    );
  }

  function Logo() {
    const logoDisplay = searchInputOpen ? "none" : "block";
    return (
      <figure style={{ display: logoDisplay }}>
        <img
          src={process.env.PUBLIC_URL + "images/logo_infobae_naranja.svg"}
         
          alt="logo"
          className="logo"
        />
      </figure>
    );
  }

  function SearchInput() {
    return (
      <form className="search-form" method="get">
        <input className="search-form--input" type="text" style={{ display: searchInputDisplay }}></input>
        <button
          type="submit"
          className="search-form--button button button-icon"
          onClick={(e) => {
            e.preventDefault();
            setSearchInputOpen(!searchInputOpen);
          }}
        >
          <i className="search-form--icon fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default Header;
