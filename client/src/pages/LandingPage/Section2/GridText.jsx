import React from "react";
import GridItem from "./GridItem";

function GridText() {
  return (
    <div className="grid-text">
      <GridItem
        image="images/growth.svg"
        head="Competitive Landscape"
        subhead="Overview of Market Rivals and Trends in Student Management Solutions."
      />
      <GridItem
        image="images/calender.svg"
        head="Weekly Challenges"
        subhead="Regular Tasks and Goals for Student Engagement and Progress Tracking."
      />

      <GridItem
        image="images/performance.svg"
        head="Performance Metrics"
        subhead="Key Indicators to Evaluate Student Progress and Institutional Efficiency."
      />
      <GridItem
        image="images/strategy.svg"
        head="Strategic Evaluation"
        subhead="Assessment of Key Strategies for Academic and Administrative Improvement."
      />
    </div>
  );
}

export default GridText;
