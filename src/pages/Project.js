import React from "react";
import Navigation from "../components/Navigation/Navigation";
import ProjectComponent from "../components/project/ProjectComponent";
import Sectionheader from "../components/Sectionheader";

const Project = () => {
  let sectionTitle = "Mes Projets";
  return (
    <div className="project-section">
      <Navigation />
      <Sectionheader sectionTitle={sectionTitle} />
      <ProjectComponent />
    </div>
  );
};

export default Project;
