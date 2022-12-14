import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Sectionheader from "../components/Sectionheader";

const Contact = () => {
  let sectionTitle = "Me contacter"
  return (
    <div className="contact-section">
      <Navigation />
      <Sectionheader sectionTitle={sectionTitle}/>
    </div>
  );
};

export default Contact;
