import React from "react";
import Logo from "./Logo";
import NavBars from "./NavBars";
import NavButton from "./NavButton";
import "./index.css";

function NavBar() {
  return (
    <nav>
        <Logo />
        <NavBars />
        <NavButton name="Login Now" image="/images/circularArrow.svg"  />
      </nav>
  );
}

export default NavBar;
