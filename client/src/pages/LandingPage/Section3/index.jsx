import React from "react";
import HeroText from "../_lib/HeroText";
import SecVideos from "../_lib/SecVideos";
import "./index.css"

function Section3() {
  return (
    <section className="landing-page-third-section">
      <div className="hero">

        <HeroText heading="Why We Stand Out" subheading="" para="Dedicated to excellence, we provide seamless student management with innovative solutions. Our platform ensures efficiency, accuracy, and user-friendly experiences, fostering academic growth. With robust features, real-time insights, and reliable support, we empower institutions to streamline operations effortlessly" btnCls="started" btnHead="Join Competition"
            btnImg="images/bluecirculararrow.svg"  />

        <SecVideos video="/src/assets/videos/three.mp4" />
      </div>
    </section>
  );
}

export default Section3;
