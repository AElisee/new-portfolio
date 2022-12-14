import React from "react";
import Media from "./Media";
import Menu from "./Menu";
import Name from "./Name";

const Navigation = () => {
  return (
    <div className="navigation">
      <Name />
      <Menu />
      <Media />
    </div>
  );
};

export default Navigation;
