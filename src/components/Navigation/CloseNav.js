import React from "react";

const CloseNav = ({ setShowLinks }) => {
  return (
    <div className="x-icon">
      <img
        src={"./svg/x.svg"}
        alt="menu-close"
        onClick={() => setShowLinks(false)}
        width={30}
        height={30}
      />
    </div>
  );
};

export default CloseNav;
