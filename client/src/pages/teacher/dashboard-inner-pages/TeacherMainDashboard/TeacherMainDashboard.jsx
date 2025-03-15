import React from "react";
import "./TeacherMainDashboard.css";
import Banner from "../../../student/dashboard/components/Banner";
import ChallengeSubmissionsTable from "../ChallengeSubmissionsTable/ChallengeSubmissionsTable";

function TeacherMainDashboard() {
    return (
        <div className="teacher-main-dashboard">
            <Banner />
            <ChallengeSubmissionsTable />
        </div>
    );
}

export default TeacherMainDashboard;
