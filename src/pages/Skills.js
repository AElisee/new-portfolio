import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Sectionheader from "../components/Sectionheader";

const Skills = () => {
  let sectionTitle = "Mes Compétences"
  return (
    <div className="skill-section">
      <Navigation />
     <Sectionheader sectionTitle={sectionTitle}/>
    </div>
  );
};

export default Skills;
