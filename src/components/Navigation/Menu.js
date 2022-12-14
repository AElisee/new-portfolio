import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import BurgerNav from "./BurgerNav";
import CloseNav from "./CloseNav";

const Menu = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="menu">
      <BurgerNav setShowLinks={setShowLinks} />
      <ul className={`f-menu ${showLinks ? "show-links " : " "}`}>
        {showLinks ? <CloseNav setShowLinks={setShowLinks} /> : null}
        <li>
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : " ")}
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : " ")}
            to="/a-propos"
          >
            {" "}
            A propos{" "}
          </NavLink>{" "}
        </li>{" "}
        <li>
          {" "}
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : " ")}
            to="/competences"
          >
            {" "}
            Compétences{" "}
          </NavLink>{" "}
        </li>{" "}
        <li>
          {" "}
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : " ")}
            to="/projets"
          >
            {" "}
            Projets{" "}
          </NavLink>{" "}
        </li>{" "}
        <li>
          {" "}
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : " ")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
