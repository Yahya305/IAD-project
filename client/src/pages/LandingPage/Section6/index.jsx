import React from "react";
import FaqBox from "./FaqBox";
import "./index.css"

function Section6() {
  return (
    <section className="landing-page-section-6">
      <h2>Frequently Asked Questions</h2>

        <FaqBox title="What is IAD" />
        <FaqBox title="How much does IAD cost?" />
        <FaqBox title="What can I watch on IAD Result?" />
        <FaqBox title="Where can I watch?" />

    </section>
  );
}

export default Section6;
