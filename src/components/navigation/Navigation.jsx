import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
          <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink></li>
      </ul>
    </div>
  );
};

export default Navigation;
