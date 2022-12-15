import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";

const ProjectComponent = () => {
  return (
    <div className="project-component">
      <h2 className="section-title">Mes Projets</h2>
      <h3 className="section-description">Quelques réalisations</h3>
      <div>
        <div className="project-nav">
          <ul>
            <li>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Tous
              </a>
            </li>
            <li>
              <a
                href="https://aelisee-moivieapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projet 1
              </a>
            </li>
            <li>
              <a
                href="https://aelisee-cookingapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projet 2
              </a>
            </li>
            <li>
              <a
                href="https://aelisse-cryptowatch.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projet 3
              </a>
            </li>
            <li>
              <a
                href="https://aelisee-leresto.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projet 4
              </a>
            </li>
            <li>
              <a
                href="https://aelisee-gamingcampus.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projet 5
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="projects">
        <div className="project-container">
          <Project1 />
          <Project2 />
          <Project3 />
          <Project4 />
          <Project5 />
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
