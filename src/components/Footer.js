import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Media from "./Navigation/Media";
import Menu from "./Navigation/Menu";

const Footer = () => {
  const [inFooter, setInFooter] = useState(true);
  return (
    <div className="footer">
      <div className="f-header">
        <div className="name">
          <h3>Ange-Elisée Kouassi</h3>
          <p>Développeur Front-end </p>
        </div>
        <div className="contact">
          <img
            src="./img/img_box_29.png"
            alt="img_box_29.png"
            width={24}
            height={30}
          />
          <div>
            <p className="tel">+225 07 89 14 13 81</p>
            <p className="email">2kange.eli@gmail.com</p>
          </div>
        </div>
        <div className="address">
          <img
            src="./img/img_box_30.png"
            alt="img_box_29.png"
            width={24}
            height={30}
          />
          <div>
            <p>Abidjan</p>
            <p>Côte d'Ivoire</p>
          </div>
        </div>
      </div>
      <div className="f-body">
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta iste
            perspiciatis placeat delectus accusamus earum, aperiam hic rem
            molestias adipisci?
          </p>
          <div className="media-cv">
            <Media inFooter={inFooter} />
            <div className="cv-container">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="./svg/file-plus.svg" alt="" />
                <span>mon cv</span>
              </a>
            </div>
          </div>
        </div>
        <div className="services">
          <h3>Services</h3>
          <div>
            <p>Freelance développement web</p>
            <p>Sites Internet</p>
            <p>Application Web</p>
            <p>Infographie</p>
          </div>
        </div>
        <div className="menu">
          <h3>Allez à</h3>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/a-propos">A propos</NavLink>
            </li>
            <li>
              <NavLink to="/competences">Compétences</NavLink>
            </li>
            <li>
              <NavLink to="/projets">Projets</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="f-copy-right">
        <p>© 2023 - Ange-Elisée Kouassi</p>
      </div>
    </div>
  );
};

export default Footer;
