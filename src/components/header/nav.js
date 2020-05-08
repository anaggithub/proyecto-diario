import React, { useState } from "react";
import "./nav.scss"

const Nav = () => {

  const [isNavOpen, setNavOpen] = useState(false);
  const iconClass = isNavOpen ? "fas fa-times" : "fas fa-bars";
  const navDisplay = isNavOpen ? "block" : "none";


  const navItems = ["Últimas noticias",
    "Política",
    "Sociedad",
    "Deportes",
    "Techno",
    "Docs",
    "Campo",
    "Tendencias",
    "Vidriera",
    "Personajes"
  ]

  return (
    <nav className="nav" onClick={() => setNavOpen(!isNavOpen)}>
      <i className={`nav--icon ${iconClass}`}></i>
      <ul className="nav--list" style={{ display: navDisplay }}>
        {navItems.map(elem => {      
          return <li
            className="nav--list--element"
            key={elem + 1}>
            {elem}
          </li>
        })
        }
      </ul>
    </nav>
  );
}

export default Nav