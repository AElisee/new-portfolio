import React from "react";
import { NavLink } from "react-router-dom";

const Sectionheader = ({ sectionTitle }) => {
  return (
    <div className="section-header">
      <div>
        <h2>{sectionTitle}</h2>
        <ul>
          <li>
            <NavLink to="/">Accueil <span></span></NavLink>
          </li>
          <li>{sectionTitle ? sectionTitle : ""}</li>
        </ul>
      </div>
    </div>
  );
};

export default Sectionheader;
