import React from "react";
import "./index.scss";
import SearchContainer from "../searchcontainer"
import Nav from "../navbar/nav"
import NavItems from "../navbar/nav-items"
import APITitle from "../apititle"

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
