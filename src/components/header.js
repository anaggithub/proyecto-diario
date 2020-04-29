import React, { useState } from "react";
import "../styles/styles.scss";

function Header() {
  return (
    <header className="header">
      
      <Nav />

      <figure>
        <img
          src="https://www.infobae.com/resources/assets/img/logo_infobae_naranja.svg"
          alt="logo"
          className="logo"
        />
      </figure>

      <Search />

    </header>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const iconClass = !open ? "fas fa-bars" : "fas fa-times";
  const display = !open ? "none" : "block";
  //  console.log(open);

  return (
    <nav className="nav" onClick={() => setOpen(!open)}>
      <i className={iconClass}></i>
      <ul className="nav--list" style={{ display: display }}>
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

function Search() {
  return (
    <form className="searchform" method="get">
      <input type="text"></input>
      <button type="submit" className="button--icon">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default Header;
