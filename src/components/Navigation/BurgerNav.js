import React from "react";

const BurgerNav = ({ setShowLinks }) => {
  return (
    <div className="burger-nav">
      <img
        src={"./svg/menu-2.svg"}
        alt="menu-burger"
        onClick={() => setShowLinks(true)}
        width={30}
        height={30}
      />
    </div>
  );
};

export default BurgerNav;
