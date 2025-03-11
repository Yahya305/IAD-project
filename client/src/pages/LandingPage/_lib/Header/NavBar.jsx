import React from "react";
import Logo from "./Logo";
import NavBars from "./NavBars";
import NavButton from "./NavButton";
import "./index.css";
import Images from "../Images";

function NavBar() {
  return (
    <nav>
        <Logo />
        <NavBars />
        <NavButton 
          name="Login Now" 
          image="/images/circularArrow.svg" 
          to="/student/login"
        />
        <button  class="hamburger">
        ☰
      </button>
    </nav>
  );
}

export default NavBar;
