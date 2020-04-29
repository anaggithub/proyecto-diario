import React from "react";
import "../styles/styles.scss";

function Header() {
 const useState = React.useState;

  const [open, setOpen] = useState(false);
  const iconClass = !open ? "fas fa-bars" : "fas fa-times"  ;
console.log(open)
  return (
    <header className="header">      
      <nav className="nav"  onClick={() => setOpen(!open)}>
        <i className={iconClass}></i>
        <ul className="nav--list">
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
  );
}

export default Header;
