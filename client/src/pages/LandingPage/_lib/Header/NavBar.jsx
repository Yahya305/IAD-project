import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "./Logo";
import NavBars from "./NavBars";
import NavButton from "./NavButton";
import "./index.css";
import Images from "../Images";
import { AiOutlineLogin } from "react-icons/ai";


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
            icon={<AiOutlineLogin />}
            to="/student/login"
          />
          <NavButton
            name="Teacher Login"
            icon={<AiOutlineLogin />}
            to="/teacher/login"
          />
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(true)}>
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
