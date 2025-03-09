import React from "react";
import NavItems from "./NavItems";

function NavBars() {
  return (
    <div className="bars">
      <NavItems name="Home" />
      <NavItems name="Features" image="/images/arrow.svg" />
      <NavItems name="How it works" />
      <NavItems name="Testimonials" />
    </div>
  );
}

export default NavBars;


