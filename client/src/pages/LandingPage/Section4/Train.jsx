import React from "react";
import MainSpan from "../_lib/MainSpan";
import Paragraph from "../_lib/Paragraph";
import Card from "./Card";

function Train() {
  return (
    <div className="train">
      <MainSpan title="Getting started is easy" />
      <Paragraph
        para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui
            animi culpa vel quasi natus labore similique repellat velit
            expedita."
      />

      <Card cardImg="/images/onecircle.svg" title="Sign Up" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ex."/>
      <Card cardImg="/images/two.svg" title="Complete Challenges" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ex."/>
      <Card cardImg="/images/three.svg" title="Submit &amp; Evaluate" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ex."/>
      
    </div>
  );
}

export default Train;
