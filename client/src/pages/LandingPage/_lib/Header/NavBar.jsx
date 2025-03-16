import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

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
          <GiHamburgerMenu />
        </button>
      </nav>
      <div className={`overlay ${menuOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <RxCross2 />
        </button>
        <div style={{display:"flex"}}>
          <NavButton 
            name="Login Now"
            icon={<AiOutlineLogin />}
            to="/student/login"
            style={{width:"unset"}}
          />
          <NavButton
            name="Teacher Login"
            icon={<AiOutlineLogin />}
            to="/teacher/login"
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
