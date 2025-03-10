import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Headers from "./_lib/Header/index.jsx"
import Footer from "./_lib/Footer/index.jsx"

function Main() {
  return (
    <>
      <Headers />
      <main>
        <div className="spacer" style={{ paddingTop: "200px" }}></div>

        <Section1 />

        <div className="spacer" style={{ paddingTop: "200px" }}></div>

        <div className="card"></div>

        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
    </>
  );
}

export default Main;
