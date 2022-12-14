import React from "react";
import AboutComponent from "../components/about/AboutComponent";
import Navigation from "../components/Navigation/Navigation";
import Sectionheader from "../components/Sectionheader";

const About = () => {
  let sectionTitle = "A propos de moi";
  return (
    <div className="about-section">
      <Navigation />
      <Sectionheader sectionTitle={sectionTitle} />
      <AboutComponent />
    </div>
  );
};

export default About;
