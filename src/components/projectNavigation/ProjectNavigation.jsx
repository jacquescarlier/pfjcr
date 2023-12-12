import React from "react";
import { NavLink } from "react-router-dom";

const ProjectNavigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink></li>
      </ul>
    </div>
  );
};

export default ProjectNavigation;
