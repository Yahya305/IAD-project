import React from "react";
import MainSpan from "../_lib/MainSpan";

function FaqBox(props) {
  return (
    <div className="faqbox">
        <MainSpan title={props.title} />
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4V20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default FaqBox;
