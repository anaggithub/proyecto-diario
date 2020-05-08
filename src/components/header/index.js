import React from "react";
import "./index.scss";
import SearchContainer from "../search-container"
import Nav from "./nav"
import APITitle from "../apititle"

const Header = () => {

  return (
    <header className="header">
      <Nav />
      <APITitle />
      <SearchContainer />
    </header>
  );

}

export default Header;
