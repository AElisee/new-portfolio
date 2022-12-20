import React from "react";
import ContactComponent from "../components/contact/ContactComponent";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";
import Sectionheader from "../components/Sectionheader";

const Contact = () => {
  let sectionTitle = "Me contacter";
  return (
    <div className="contact-section">
      <Navigation />
      <Sectionheader sectionTitle={sectionTitle} />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Contact;
