import React from "react";
import SecVideos from "../_lib/SecVideos";
import GridText from "./GridText";
import "./index.css";

function Section2() {
    return (
        <section className="landing-page-section2">
            <h2>Competition Overview</h2>
            <div className="hero">
                <SecVideos video="/videos/7092056-hd_1920_1080_30fps.mp4" />

                <GridText />
            </div>
        </section>
    );
}

export default Section2;
