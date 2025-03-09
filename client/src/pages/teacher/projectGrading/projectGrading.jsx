import React, { useState } from "react";
import TeamForm from "./components/TeamForm/teamForm";
import "./style.css";

const ProjectGradingPage = () => {
  const [teamSizes, setTeamSizes] = useState({ A: 0, B: 0 });

  const handleTeamSizeChange = (event, team) => {
    const size = event.target.value === "default" ? 0 : parseInt(event.target.value, 10);
    setTeamSizes((prev) => ({ ...prev, [team]: size }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      "Team A": {
        url: formData.get("urlA"),
        members: Array.from({ length: teamSizes.A }, (_, i) => ({
          name: formData.get(`nameA${i}`),
          roll: formData.get(`rollA${i}`),
          grade: parseFloat(formData.get(`gradeA${i}`)) || 0
        }))
      },
      "Team B": {
        url: formData.get("urlB"),
        members: Array.from({ length: teamSizes.B }, (_, i) => ({
          name: formData.get(`nameB${i}`),
          roll: formData.get(`rollB${i}`),
          grade: parseFloat(formData.get(`gradeB${i}`)) || 0
        }))
      }
    };

    console.log("Saved Data:", data);
  };

  return (
    <div className="grading-container">
      <h1 className="heading">Project Grading</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          {["A", "B"].map((team) => (
            <TeamForm
              key={team}
              team={team}
              teamSize={teamSizes[team]}
              handleTeamSizeChange={handleTeamSizeChange}
            />
          ))}
        </div>
        <button type="submit" className="button">Save</button>
      </form>
    </div>
  );
};
export default ProjectGradingPage;
