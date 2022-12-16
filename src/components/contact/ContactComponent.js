import React from "react";
import ContactForm from "./ContactForm";

const ContactComponent = () => {
  return (
    <div className="contact-component">
      <h2 className="section-title">Contactez-moi !</h2>
      {/* <h3 className="section-description">
        Formations suivies & <br /> Posts occupés
      </h3> */}
      <div className="container">
        <div className="contact">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium obcaecati odit facilis ut ratione. Facere?
          </p>
          <div className="phone">
            <h4>Téléphone:</h4>
            <p id="num">+225 07 89 14 13 81</p>
            <a href="tel:+225 07 89 14 13 81" id="phone">
              Appelez !
            </a>
          </div>
          <div className="mail">
            <h4>Email:</h4>
            <p>2kange.eli@gmail.com</p>
          </div>
          <div className="address">
            <h4>Adresse:</h4>
            <p>Côte d'Ivoire</p>
            <p>Abidjan</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactComponent;
