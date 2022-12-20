import React from "react";
import ContactForm from "./ContactForm";
import Map from "./Map";

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
            Je suis intéressé par les offres d'emploi en entreprise au poste de
            développeur Front-end (et Node.js au besoin...). Et aussi par les
            opportunités de freelance. N'hésitez pas à me contacter si vous êtes
            dans le besoin ou pour d'autres demandes.
          </p>
          <div className="phone">
            <h4>Téléphone:</h4>
            <p id="num">+225 07 89 14 13 81</p>
            <a href="tel:+225 07 89 14 13 81" id="phone">
              cliquez pour appeler !
            </a>
          </div>
          <div className="email">
            <h4>Email:</h4>
            <p>
              2kange.eli<span>@</span>gmail.com
            </p>
          </div>
          <div className="address">
            <h4>Adresse:</h4>
            <p>Côte d'Ivoire</p>
            <p>Abidjan</p>
          </div>
        </div>
        <ContactForm />
      </div>
      <Map />
    </div>
  );
};

export default ContactComponent;
