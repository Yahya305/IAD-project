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
        para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        ratione, molestias cupiditate possimus obcaecati nisi libero blanditiis
        consequuntur mollitia veritatis?"
      />

      <Buttons />
        <MainSpan title="Competition will end in" />
      <Boxes />
      
    </section>
  );
}

export default Section5;
