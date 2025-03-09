import React from "react";
import GridItem from "./GridItem";

function GridText() {
  return (
    <div className="grid-text">
      <GridItem
        image="images/growth.svg"
        head="Competitive Landscape"
        subhead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          nobis."
      />
      <GridItem
        image="images/calender.svg"
        head="Weekly Challenges"
        subhead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              nobis."
      />

      <GridItem
        image="images/performance.svg"
        head="Performance Metrics"
        subhead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nobis."
      />
      <GridItem
        image="images/strategy.svg"
        head="Strategic Evaluation"
        subhead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nobis."
      />
    </div>
  );
}

export default GridText;
