import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="l-container">
          <div>
            <div className="welcome">
              <span>Bienvenue ! Je suis,</span>
              <h1>
                <strong> Ange Elisée Kouassi</strong>
              </h1>
            </div>
            <div className="box">
              <div>
                <p>Je suis dévéloppeur Web</p>
                <p>Développeur Javascript/ReactJs</p>
              </div>
              <div className="cv-container">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  mon cv
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="r-container">
          <span>image ici</span>
           
        </div>
      </div>
    </div>
  );
};

export default Header;
