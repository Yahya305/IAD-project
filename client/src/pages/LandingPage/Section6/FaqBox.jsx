import React, { useState } from "react";
import MainSpan from "../_lib/MainSpan";

function FaqBox({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="faqbox">
      <div className="header" onClick={() => setIsOpen(p => !p)}>
        <MainSpan title={title} />
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
      {isOpen && <div className="content">
        {content}
      </div>}
    </div>
  );
}

export default FaqBox;
