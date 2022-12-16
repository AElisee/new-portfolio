import React from "react";
import AboutComponent from "../components/about/AboutComponent";
import ContactComponent from "../components/contact/ContactComponent";
import Header from "../components/Header";
import Navigation from "../components/Navigation/Navigation";
import ProjectComponent from "../components/project/ProjectComponent";
import SkillComponent from "../components/skills/SkillComponent";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <div>
        <h2>animation ici</h2>
      </div>
      <AboutComponent />
      <SkillComponent />
      <ProjectComponent />
      <ContactComponent />
    </div>
  );
};

export default Home;
