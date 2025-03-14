import React from 'react'
import { useState } from "react";
import { Search } from "lucide-react";
import "./SearchCollapse.css";

const index = () => {
    const [isExpanded, setIsExpanded] = useState(window.innerWidth > 567);

    const handleKeyDown = (event) => {
      if (event.key === "Enter" && window.innerWidth <= 567) {
        setIsExpanded(false);
      }
    };
  
    return (
      <div className={`search-container ${isExpanded ? "expanded" : ""}`}>
        <button onClick={() => setIsExpanded(true)} className="search-button">
          <Search className="search-icon" />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  };
  

export default index