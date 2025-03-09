import React from "react";
import HeroText from "../_lib/HeroText";
import SecVideos from "../_lib/SecVideos";
import "./index.css";

function Section1() {
  return (
    <section className="landing-page-first">
      <div className="hero">
       
        <HeroText heading="Academic Competition" subheading="IAD - 2025" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            omnis doloremque, non odio quo necessitatibus sequi ullam dolores
            vel facilis nemo, sed adipisci impedit magnam. In accusamus
            recusandae nemo hic, laboriosam illo pariatur mollitia numquam error
            assumenda ipsam quidem nulla, doloremque quia porro eaque cumque?" 
            btnCls="started"
            btnHead="Get Started today"
            btnImg="/images/circularArrow.svg"
        />
        
        <SecVideos video="videos/4017223-uhd_3840_2160_30fps.mp4" />

      </div>
    </section>
  );
}

export default Section1;
