import React from "react";
import SecVideos from "../_lib/SecVideos";
import Train from "./Train";
import "./index.css"

function Section4() {
  return (
    <section className="landing-page-four-section">
      <div className="hero">
        <SecVideos video="/videos/five.mp4" />

        <Train />

        
      </div>
    </section>
  );
}

export default Section4;
