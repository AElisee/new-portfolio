import React from "react";
import { skills } from "../../data/skillData";

const SkillComponent = () => {
  return (
    <div className="skill-component">
      <h2 className="section-title">Mes compétences</h2>
      <h3 className="section-description">Top Compétences</h3>
      <ul className="card-container">
        {skills.map((el, index) => (
          <li key={index} className="card">
            <div className="img-container">
              <img src={el.icon} alt={`${el.name}-icon`} />
            </div>
            <span>{el.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillComponent;
