import React from "react";
import FaqBox from "./FaqBox";
import "./index.css"

const data = [
  {
    title: "What is IAD",
    content: "IAD is a platform that allows you to watch a wide range of movies and TV shows."
  },
  {
    title: "How much does IAD cost?",
    content: "IAD is free to use."
  },
  {
    title: "What can I watch on IAD Result?",
    content: "You can watch a wide range of movies and TV shows on IAD."
  },
  {
    title: "Where can I watch?",
    content: "You can watch on any device that has an internet connection."
  }
]

function Section6() {

  return (
    <section className="landing-page-section-6">
      <h2>Frequently Asked Questions</h2>

      {data.map((item, index) => (
        <FaqBox title={item.title} key={index} content={item.content} />
      ))}

    </section>
  );
}

export default Section6;
