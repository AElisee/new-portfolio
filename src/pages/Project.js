import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Sectionheader from "../components/Sectionheader";

const Project = () => {
  let sectionTitle = "Mes Projets"
  return (
    <div className="project-section">
      <Navigation />
      <Sectionheader sectionTitle={sectionTitle}/>
    </div>
  );
};

export default Project;
