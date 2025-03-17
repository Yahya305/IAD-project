import React from "react";
import GridItem from "./GridItem";

function GridText() {
  return (
    <div className="grid-text">
      <GridItem
        image="images/growth.svg"
        head="Competitive Landscape"
        subhead="An intuitive and engaging environment for students and teachers.Offers real-time leaderboards, team-based challenges, and seamless task submissions."
      />
      <GridItem
        image="images/calender.svg"
        head="Weekly Challenges"
        subhead="keeps students engaged with weekly challenges designed to test their skills and knowledge in a competitive yet collaborative environment."
      />

      <GridItem
        image="images/performance.svg"
        head="Performance Metrics"
        subhead="real-time performance metrics, including challenge completion rates, scores, and leaderboard rankings. Gain insights through detailed analytics to assess strengths, improvement areas, and overall competition engagement"
      />
      <GridItem
        image="images/strategy.svg"
        head="Strategic Evaluation"
        subhead="By analyzing team performance and participation trends, teachers can optimize future competitions for better learning outcomes."
      />
    </div>
  );
}

export default GridText;
