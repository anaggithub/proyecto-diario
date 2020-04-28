import React from "react";
import "../styles/styles.scss";


function Header() {

    return(
        <header className="header">
        <nav className="nav">
          <i className="fas fa-bars"></i>
          <ul className="nav--list">
            <li>Argentina</li>
            <li>America</li>
            <li>Tendencias</li>
            <li>Teleshow</li>
            <li>Deportes</li>
            <li>Registrate al Newsletter</li>
          </ul>
        </nav>

        <figure>
          <img
            src="https://www.infobae.com/resources/assets/img/logo_infobae_naranja.svg"
            alt="logo"
            className="logo"
          />
        </figure>
        <form className="searchform" method="get">
          <input type="text"></input>
          <button type="submit" className="button--icon">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </header>
    )
}

export default Header