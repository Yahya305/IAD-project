import React from "react";
import HeroText from "../_lib/HeroText";
import SecVideos from "../_lib/SecVideos";
import "./index.css";

function Section1() {
  return (
    <section className="landing-page-first">
      <div className="hero">
       
        <HeroText heading="Academic Competition" subheading="IAD - 2025" para="Create and manage competitions effortlessly with our platform. Organize challenges, track team progress, and view real-time leaderboards. Empower students with engaging competitions and streamline the evaluation process" 
            btnCls="started"
            btnHead="Get Started today"
            btnImg="/images/circularArrow.svg"
        />
        
        <SecVideos video="/videos/4017223-uhd_3840_2160_30fps.mp4" />

      </div>
    </section>
  );
}

export default Section1;
