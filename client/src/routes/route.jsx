import React from "react";
import { Routes, Route } from "react-router";

import LandingPage from "../pages/LandingPage/Main.jsx";
import TeacherDashboardStructure from "../pages/teacher/dashboard";
import Loginpage from "../pages/student/authentication/Login";
import Signup from "../pages/student/authentication/signup";
import ProjectGradingPage from "../pages/teacher/projectGrading/projectGrading";

//  Student Routes
import StudentDashboardStructure from "../pages/student/dashboard";
import StudentMainDashboardPage from "../pages/student/dashboard/dashboard-inner-pages/MainDashboard";
import PerformanceAnalysisPage from "../pages/student/dashboard/dashboard-inner-pages/PerformanceAnalysis";
import StudentProgressPage from "../pages/student/dashboard/dashboard-inner-pages/StudentProgress";

// Teacher Routes
import ChallengeEntry from "../pages/teacher/dashboard-inner-pages/ChallengeEntry";

function Router() {
    return (
        <Routes>
            {/* Root route */}
            <Route path="/" element={<LandingPage />} />

            {/* Nested student routes */}
            <Route path="/student" element={<StudentDashboardStructure />}>
                <Route path="dashboard" element={<StudentMainDashboardPage />} />
                <Route path="performance-analysis" element={<PerformanceAnalysisPage />} />
                <Route path="std-progress" element={<StudentProgressPage />} />
                <Route path="login" element={<Loginpage />} />
                <Route path="signup" element={<Signup />} />
            </Route>

            {/* Nested teacher routes */}
            <Route path="/teacher" element={<TeacherDashboardStructure />} >
                <Route path="dashboard" element={<StudentMainDashboardPage />} />
                <Route path="challenge-entry" element={<ChallengeEntry />} />
                <Route
                    path="student-grading"
                    element={<ProjectGradingPage />}
                />
            </Route>
        </Routes>
    );
}

export default Router;
