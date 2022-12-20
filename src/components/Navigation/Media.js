import React from "react";

const Media = ({ inFooter }) => {
  return (
    <div className="media">
      <div className="container">
        <a
          href="https://www.linkedin.com/in/angekouassi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {inFooter ? (
            <img src={"./svg/brand-linkedin.svg"} alt="brand.linkedin" />
          ) : null}
          <span> Linkedin</span>
        </a>
      </div>
    </div>
  );
};

export default Media;
