import React from "react";
import "./header.scss";
import SearchContainer from "../searchcontainer/search-container"
import Nav from "../navbar/nav"
import NavItems from "../navbar/nav-items"
import APITitle from "../apititle/apititle"

const Header = () => {

  return (
    <header className="header">
      <Nav items = {NavItems}/>
      <APITitle />
      <SearchContainer />
    </header>
  );

}

export default Header;
