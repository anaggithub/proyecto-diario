import React, { useState } from "react";
import "../../styles/styles.scss";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const iconClass = navOpen ? "fas fa-times" : "fas fa-bars";
  const navDisplay = navOpen ? "block" : "none";

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

export default Nav