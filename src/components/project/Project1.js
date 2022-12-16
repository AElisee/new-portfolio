import React from "react";

const Project1 = () => {
  return (
    <div className="project img-on-right">
      <div className="txt-part p1">
        <h3>Project 1</h3>
      </div>
      <div className="img-part">
        <div className="img-container">
          <img src="./img/movies.jpg" alt="movies-bg" />
          <div className="view">
            <a href="" target="_blank" rel="noopener noreferrer">
              Voir plus <span>></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
