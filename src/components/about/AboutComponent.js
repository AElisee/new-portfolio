import React from "react";
import Sectionheader from "../Sectionheader";

const AboutComponent = () => {
  return (
    <div className="about-component">
      <h2 className="section-title">A propos de Ange Kouassi</h2>
      <h3 className="section-description">
        Formations suivies & <br /> Posts occupés
      </h3>
      <ul className="card-container">
        <li className="card">
          <div className="l-card">
            <div className="l-card-container green"></div>
          </div>
          <div className="r-card">
            <h3 className="post">Stagaire/Dévéloppeur front-end</h3>
            <h4 className="agency">Orionis Digital Agency</h4>
            <p className="date">15 Octobre 2022 - Aujourd'hui</p>
            <p className="description">
              description Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Autem, ipsa!
            </p>
          </div>
        </li>

        <li className="card">
          <div className="l-card">
            <div className="l-card-container gray">
              <img src={"./svg/certificate-2.svg"} alt="" />
            </div>
          </div>
          <div className="r-card">
            <h3 className="post">BootCamps FullStack Js</h3>
            <h4 className="agency">Gomycode</h4>
            <p className="date">11 Avril 2022 - 27 Août 2022</p>
            <p className="description">
              description Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Autem, ipsa!
            </p>
          </div>
        </li>
        <li className="card">
          <div className="l-card">
            <div className="l-card-container blue"></div>
          </div>
          <div className="r-card">
            <h3 className="post">Certificat/Dévéloppement Web & Mobile</h3>
            <h4 className="agency">Orange Digital Academy</h4>
            <p className="date">Novembre 2021</p>
            <p className="description">
              description Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Autem, ipsa!
            </p>
          </div>
        </li>
        <li className="card">
          <div className="l-card">
            <div className="l-card-container gray"></div>
          </div>
          <div className="r-card">
            <h3 className="post">
              Attestation/Formation aux métiers du numérique
            </h3>
            <h4 className="agency">Agence Emploi Jeune</h4>
            <p className="date">Juillet -Août 2019</p>
            <p className="description">
              description Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Autem, ipsa!
            </p>
          </div>
        </li>
        <li className="card">
          <div className="l-card">
            <div className="l-card-container green"></div>
          </div>
          <div className="r-card">
            <h3 className="post">
              Licence/Informatique et Sciences du numérique
            </h3>
            <h4 className="agency">Université Virtuelle de Côte d'Ivoire</h4>
            <p className="date">2017 - 2019</p>
            <p className="description">
              description Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Autem, ipsa!
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutComponent;
