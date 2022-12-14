import React from "react";
import AboutComponent from "../components/about/AboutComponent";
import Header from "../components/Header";
import Navigation from "../components/Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <div><h2>animation ici</h2></div>
      <AboutComponent/>
    </div>
  );
};

export default Home;
