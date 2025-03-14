import React from "react";
import "./style.css";

const TeamForm = ({ team, teamSize, handleTeamSizeChange }) => {
  return (
    <div className="card" style={{ height: "auto" }}>
      <div className="card-content">
        <h2>Team {team}</h2>

        <label className="label">Number of Team Members:</label>
        <select
          className="dropdown"
          onChange={(e) => handleTeamSizeChange(e, team)}
          value={teamSize > 0 ? teamSize : "default"}
          required
        >
          <option value="default" disabled>Select Number of Team Members</option>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <input type="url" placeholder="Project URL" className="input" required />

        {teamSize > 0 && (
          <div className="members-list">
            {Array.from({ length: teamSize }, (_, index) => (
              <div key={index} className="member-row">
                <input type="text" placeholder={`Member ${index + 1} Name`} className="input third" required />
                <input type="text" placeholder="Roll Number" className="input third" required />
                <input type="number" placeholder="Grade" className="input third" min="0" max="10" step="0.1" required />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default TeamForm;
