import React from "react";

const NavBar = () => {
  const links = ["home", "about", "projects"];
  const anchors = links.map((link) => {
    return <a key={link} href={"#" + link}>
      {link}
    </a>;
  })
  return <nav>{anchors}</nav>
}

export default NavBar;


