import React from "react";
import { Routes, Route } from "react-router";

import LandingPage from "../pages/LandingPage/Main.jsx";
import { TeacherRoutes } from "../pages/teacher/dashboard";
import Loginpage from "../pages/student/authentication/Login";
import Signup from "../pages/student/authentication/signup";
import ProjectGradingPage from "../pages/teacher/projectGrading/projectGrading";

//  Student Routes
import StudentDashboardStructure, {
    StudentRoutes,
} from "../pages/student/dashboard";
import StudentMainDashboardPage from "../pages/student/dashboard/dashboard-inner-pages/MainDashboard";
import PerformanceAnalysisPage from "../pages/student/dashboard/dashboard-inner-pages/PerformanceAnalysis";
import StudentProgressPage from "../pages/student/dashboard/dashboard-inner-pages/StudentProgress";

// Teacher Routes
import ChallengeEntry from "../pages/teacher/dashboard-inner-pages/ChallengeEntry";
import TeamLeaderboard from "../pages/student/dashboard/dashboard-inner-pages/TeamLeaderboard/TeamLeaderboard.jsx";
import CreateCompetition from "../pages/teacher/dashboard-inner-pages/CreateCompetition/index.jsx";

function Router() {
    return (
        <Routes>
            {/* Root route */}
            <Route path="/" element={<LandingPage />} />

            <Route path="/student/login" element={<Loginpage />} />
            <Route path="/student/signup" element={<Signup />} />
            {/* Nested student routes */}
            <Route path="/student" element={<StudentDashboardStructure routes={StudentRoutes} />}>
                <Route
                    path="dashboard"
                    element={<StudentMainDashboardPage />}
                />
                <Route
                    path="performance-analysis"
                    element={<PerformanceAnalysisPage />}
                />
                <Route path="std-progress" element={<StudentProgressPage />} />
                <Route path="team-leaderboard" element={<TeamLeaderboard />} />
            </Route>

            {/* Nested teacher routes */}
            <Route path="/teacher" element={<StudentDashboardStructure routes={TeacherRoutes} />}>
                <Route
                    path="dashboard"
                    element={<StudentMainDashboardPage />}
                />
                <Route path="challenge-entry" element={<ChallengeEntry />} />
                <Route
                    path="student-grading"
                    element={<ProjectGradingPage />}
                />
                <Route
                    path="competition-creation"
                    element={<CreateCompetition />}
                />
            </Route>
        </Routes>
    );
}

export default Router;
