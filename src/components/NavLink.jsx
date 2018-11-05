import React from "react";
import PropTypes from "prop-types";

function NavLink(props) {
  let navLinkStyles = {
    listStyle: "none",
  }
  let navALinkStyles = {
    color: "white",
    textDecoration: "none"
  }
  return (
    <li style={navLinkStyles}>
      <a style={navALinkStyles} href="#">{props.name}</a>
    </li>
  )
}

NavLink.propTypes = {
  name: PropTypes.string
}

export default NavLink;
