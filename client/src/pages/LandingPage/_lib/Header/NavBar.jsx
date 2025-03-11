import React, { useState } from "react";
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
        <NavBars />
        <NavButton
          name="Login Now"
          image="/images/circularArrow.svg"
          to="/student/login"
        />

        <button class="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
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
