import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "./Map";

const ContactForm = () => {
  const form = useRef();
  const [isfocus, setIsfocus] = useState(false);

  const focused = (e) => {
    setIsfocus(true);
    e.target.placeholder = " ";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formMes = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_k1dntea",
        "template_m56ahbt",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMes.innerHTML =
            "<div><img src={./svg/circle-check.svg}/><p class='success'>Message envoyé !</p></div>";

          setTimeout(() => {
            formMes.innerHTML = "";
          }, 3000);
        },
        (error) => {
          // console.log(error.text);
          formMes.innerHTML =
            "<p class='error'>L'envoie du message a échoué, veuillez réessayer !</p> ";

          setTimeout(() => {
            formMes.innerHTML = "";
          }, 5000);
        }
      );
  };

  return (
    <>
      <div className="form-container">
        <div className="form-container-head">
          <h3>
            Pour vos projets futurs... <br /> contactez-moi !
          </h3>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-container">
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              id="name"
              placeholder="Votre nom*"
              onFocus={(e) => focused(e)}
              onBlur={(e) => (e.target.placeholder = "Votre nom*")}
            />
          </div>
          <div className="email-container">
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              id="email"
              placeholder="Email*"
              onFocus={(e) => focused(e)}
              onBlur={(e) => (e.target.placeholder = "Email*")}
            />
          </div>
          <div className="message-container">
            <textarea
              name="message"
              id="mess"
              placeholder="Message*"
              onFocus={(e) => focused(e)}
              onBlur={(e) => (e.target.placeholder = "Message*")}
            />
          </div>
          <div className="submit-container">
            <input type="submit" value="Envoyer" className="submit-btn hover" />
          </div>
        </form>
        <div className="formMessage"></div>
      </div>
    </>
  );
};

export default ContactForm;
