import React, { useState } from "react";
import "./index.scss";
import SearchContainer from "../search-container"
import APITitle from "../apititle"

const Header = () => {

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
    <header className="header">
      <nav className="header--nav" onClick={() => setNavOpen(!isNavOpen)}>
        <i className={`header--nav--icon ${iconClass}`}></i>
        <ul className="header--nav--list" style={{ display: navDisplay }}>
          {navItems.map(elem => {
            return <li
              className="header--nav--list--element"
              key={elem + 1}>
              {elem}
            </li>
          })
          }
        </ul>
      </nav>
      <APITitle />
      <SearchContainer />
    </header>
  );

}

export default Header;
