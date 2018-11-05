import React from "react";
import NavLink from "./NavLink";

function NavLinks(props) {

  let navLinkWrapper = {
    display: "flex",
    width: "450px",
    justifyContent: "space-around"
  }
  return (
    <ul style={navLinkWrapper}>
      <NavLink name="Become a host"/>
      <NavLink name="Help"/>
      <NavLink name="Sign up"/>
      <NavLink name = "Log in"/>
    </ul>
  )
};

export default NavLinks;
