import React from "react";
import "../../styles/styles.scss";
import SearchContainer from "./search-container"
import Nav from "./nav"
import Logo from "./logo"

const Header = () => {

  return (
    <header className="header">
      <Nav />
      <Logo />
      <SearchContainer />
    </header>
  );
}

export default Header;
