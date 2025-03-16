import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "./Logo";
import NavBars from "./NavBars";
import NavButton from "./NavButton";
import "./index.css";
import Images from "../Images";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <Logo />
        {/* <NavBars /> */}
      <div>
      <NavButton
          name="Login Now"
          image="/images/circularArrow.svg"
          to="/student/login"
        />
      <NavButton
          name="Teacher Login"
          image="/images/circularArrow.svg"
          to="/teacher/login"
        />
      </div>

        <button className="hamburger" onClick={() => setMenuOpen(true)}>
        <GiHamburgerMenu />
        </button>
      </nav>
      <div className={`overlay ${menuOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✖
        </button>
        <NavBars />
      </div>
    </>
  );
}

export default NavBar;
