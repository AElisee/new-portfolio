import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="bg-text">
        <h2>front-end</h2>
      </div>
      <div className="container">
        <div className="l-container">
          <div>
            <div className="welcome">
              <span>Bienvenue ! &nbsp; Je suis,</span>
              <h1>Ange Elisée Kouassi</h1>
            </div>
            <div className="box">
              <div>
                <p>Je suis dévéloppeur Web</p>
                <p>Développeur Javascript/React.js/Node.js</p>
              </div>
              <div className="cv-container">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  mon cv
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="r-container">
          <span>
            image ici Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur velit vitae officia fugiat maiores eos quo doloremque.
            Harum, numquam fugiat. Hic asperiores temporibus corrupti nulla
            iusto dolorem vel nostrum dolore quas! Maiores nisi illum voluptatem
            sint, corporis animi, corrupti quis saepe ratione facere, magnam
            inventore!
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
