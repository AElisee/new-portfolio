import React from "react";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
};

export default Project;
