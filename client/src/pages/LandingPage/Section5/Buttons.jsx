import React from "react";
import NavButton from "../_lib/Header/NavButton";

function Buttons() {
  return (
    <div className="buttons">
      <NavButton name="Join Competition" image="images/circularArrow.svg" />
      <NavButton name="Learn More" image="images/bluecirculararrow.svg" className="learn" />
    </div>
  );
}

export default Buttons;
