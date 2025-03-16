import React from "react";
import MainSpan from "../_lib/MainSpan";
import Paragraph from "../_lib/Paragraph";
import Buttons from "./Buttons";
import Boxes from "./Boxes";
import "./index.css"

function Section5() {
  return (
    <section className="landing-page-section-5">
      <MainSpan title="Getting ready for the next competition" />
      <Paragraph
        para="Preparing Students for Upcoming Academic and Skill-Based Competitions with Confidence and Excellence."
      />

      <Buttons />
        <MainSpan title="Competition will end in" />
      <Boxes />
      
    </section>
  );
}

export default Section5;
