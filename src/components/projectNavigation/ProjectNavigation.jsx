import React from "react";
import { NavLink } from "react-router-dom";

const ProjectNavigation = () => {
  return (
    <>
      <ul className="navigation">
        <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink></li>
      </ul>
    </>
  );
};

export default ProjectNavigation;
