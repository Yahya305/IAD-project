import React from "react";
import MainSpan from "../_lib/MainSpan";
import Paragraph from "../_lib/Paragraph";
import Card from "./Card";

function Train() {
  return (
    <div className="train">
      <MainSpan title="Getting started is easy" />
      <Paragraph para=" Begin Effortlessly with Our Intuitive Student Management System for Seamless Administration." />

      <Card
        cardImg="/images/onecircle.svg"
        title="Sign Up"
        para="Register to Access Your Student Management Dashboard Effortlessly."
      />
      <Card
        cardImg="/images/two.svg"
        title="Complete Challenges"
        para="Achieve Milestones by Completing Assigned Academic and Administrative Tasks."
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
