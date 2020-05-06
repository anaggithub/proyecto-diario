import React from "react";
import "./header.scss";
import SearchContainer from "./search-container"
import Nav from "./nav"
import APITitle from "../apititle/apititle"

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
