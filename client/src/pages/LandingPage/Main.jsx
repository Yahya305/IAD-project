import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Headers from "./_lib/Header/index.jsx";
import Footer from "./_lib/Footer/index.jsx";
import "./LandingPage.css";
import Spacer from "./_lib/Spacer/Spacer.jsx";

function Main() {
    return (
        <>
            <Headers />
            <main>
                <Spacer height="100px" />
                <Section1 />
                <Spacer height="100px" />
                <Section2 />
                <Spacer height="100px" />
                <Section3 />
                <Spacer height="100px" />
                <Section4 />
                <Spacer height="100px" />
                <Section5 />
                <Spacer height="100px" />
                <Section6 />
            </main>
            <Footer />
        </>
    );
}

export default Main;
