import React from "react";
import HeroText from "../_lib/HeroText";
import SecVideos from "../_lib/SecVideos";
import "./index.css"

function Section3() {
  return (
    <section className="landing-page-third-section">
      <div className="hero">

        <HeroText heading="Why We Stand Out" subheading="" para="Our platform offers a unique blend of customizable competitions, real-time leaderboards, and automated scoring, making learning engaging and competitive. Unlike traditional assessment tools, we provide seamless team collaboration, instant feedback, and detailed performance analytics, ensuring a dynamic and interactive experience for both teachers and students." btnCls="started" btnHead="Join Competition"
            btnImg="images/bluecirculararrow.svg"  />

        <SecVideos video="/videos/three.mp4" />
      </div>
    </section>
  );
}

export default Section3;
