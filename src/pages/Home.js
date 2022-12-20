import React from "react";
import AboutComponent from "../components/about/AboutComponent";
import ContactComponent from "../components/contact/ContactComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation/Navigation";
import ProjectComponent from "../components/project/ProjectComponent";
import SkillComponent from "../components/skills/SkillComponent";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <AboutComponent />
      <SkillComponent />
      <ProjectComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Home;
