import React from "react";
import FaqBox from "./FaqBox";
import "./index.css"

const data = [
  {
    title: " How do teachers create competitions on the platform?",
    content: "Teachers can sign up, create competitions, add multiple challenges, and assign them to teams or individual students through an easy-to-use interface."
  },
  {
    title: "How do students participate in challenges?",
    content: "Students join competitions, complete assigned challenges, and submit their work within the platform, earning points based on performance."
  },
  {
    title: "How is the leaderboard updated?",
    content: "The leaderboard updates in real-time based on challenge scores, allowing students and teams to track their rankings instantly."
  },
  {
    title: "Can competitions be customized?",
    content: "Yes, teachers can set custom rules, deadlines, and scoring criteria to tailor competitions to their specific needs."
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
