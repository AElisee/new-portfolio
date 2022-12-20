import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";
import Sectionheader from "../components/Sectionheader";
import SkillComponent from "../components/skills/SkillComponent";

const Skills = () => {
  let sectionTitle = "Mes Compétences";
  return (
    <div className="skill-section">
      <Navigation />
      <Sectionheader sectionTitle={sectionTitle} />
      <SkillComponent />
      <Footer />
    </div>
  );
};

export default Skills;
