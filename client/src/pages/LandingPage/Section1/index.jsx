import React from "react";
import HeroText from "../_lib/HeroText";
import SecVideos from "../_lib/SecVideos";
import "./index.css";

function Section1() {
  return (
    <section className="landing-page-first">
      <div className="hero">
       
        <HeroText heading="Academic Competition" subheading="IAD - 2025" para="Manage student records efficiently with our Student Management App. Easily track attendance, grades, and performance. Simplify administrative tasks with seamless data management and real-time updates." 
            btnCls="started"
            btnHead="Get Started today"
            btnImg="/images/circularArrow.svg"
        />
        
        <SecVideos video="/src/assets/videos/4017223-uhd_3840_2160_30fps.mp4" />

      </div>
    </section>
  );
}

export default Section1;
