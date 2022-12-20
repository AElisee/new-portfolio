import React, { useEffect, useState } from "react";
import Media from "./Media";
import Menu from "./Menu";
import Name from "./Name";

const Navigation = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNav, setHideNav] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 600) {
        console.log(window.scrollY);
        setHideNav(true);
        console.log("cachez");
      } else {
        setHideNav(false);
        console.log("faire apparaitre !");
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div
      className={`navigation ${
        hideNav ? "hide-navigation" : "show-navigation"
      }`}
    >
      <Name />
      <Menu />
      <Media />
    </div>
  );
};

export default Navigation;
