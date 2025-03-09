import React from "react";
import HeroText from "../_lib/HeroText";
import SecVideos from "../_lib/SecVideos";
import "./index.css"

function Section3() {
  return (
    <section className="landing-page-third-section">
      <div className="hero">

        <HeroText heading="Why We Stand Out" subheading="" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            omnis doloremque, non odio quo necessitatibus sequi ullam dolores
            vel facilis nemo, sed adipisci impedit magnam. In accusamus
            recusandae nemo hic, laboriosam illo pariatur mollitia numquam error
            assumenda ipsam quidem nulla, doloremque quia porro eaque cumque?" btnCls="started" btnHead="Join Competition"
            btnImg="images/bluecirculararrow.svg"  />

        <SecVideos video="videos/three.mp4" />
      </div>
    </section>
  );
}

export default Section3;
