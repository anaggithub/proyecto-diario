import React, { useState } from "react";
import "../../styles/styles.scss";
import "./nav.scss"

const Nav = ({ items }) => {

  const [isNavOpen, setNavOpen] = useState(false);
  const iconClass = isNavOpen ? "fas fa-times" : "fas fa-bars";
  const navDisplay = isNavOpen ? "block" : "none";

  const Item = ({ name }) => {
    return (
      <li className="nav--list--element">{name}</li>
    )
  }

  return (
    <nav className="nav" onClick={() => setNavOpen(!isNavOpen)}>
      <i className={`nav--icon ${iconClass}`}></i>
      <ul className="nav--list" style={{ display: navDisplay }}>
        {items.map(e => <Item
          name={e}
          key={e + 1} />)
        }
      </ul>
    </nav>
  );
}

export default Nav