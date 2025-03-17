import React from "react";
import MainSpan from "../_lib/MainSpan";
import Paragraph from "../_lib/Paragraph";
import Card from "./Card";

function Train() {
  return (
    <div className="train">
      <MainSpan title="Getting started is easy" />
      <Paragraph para="Seamless experience—simply sign up, participate in challenges, and track your progress effortlessly" />

      <Card
        cardImg="/images/onecircle.svg"
        title="Sign Up"
        para="Sign up as a teacher or student and join competitions effortlessly."
      />
      <Card
        cardImg="/images/two.svg"
        title="Complete Challenges"
        para="Participate in exciting challenges, collaborate with your team, and earn points."
      />
      <Card
        cardImg="/images/three.svg"
        title="Submit &amp; Evaluate"
        para="Upload Assignments and Assess Student Performance Efficiently."
      />
    </div>
  );
}

export default Train;
