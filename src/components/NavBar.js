// src/components/NavBar.js
import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link) => (
        <a key={link} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar; // Make sure this export is present