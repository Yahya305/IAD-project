import React from "react";
import { Routes, Route } from "react-router";

import LandingPage from "../pages/LandingPage/Main.jsx";
import TeacherDashboard from "../pages/teacher/dashboard";
import Loginpage from "../pages/student/authentication/Login";
import Signup from "../pages/student/authentication/signup";
import ProjectGradingPage from "../pages/teacher/projectGrading/projectGrading";

//  Student Routes
import StudentDashboardStructure  from "../pages/student/dashboard";
import StudentMainDashboardPage from "../pages/student/dashboard/dashboard-inner-pages/MainDashboard";
import PerformanceAnalysis from "../pages/student/dashboard/dashboard-inner-pages/PerformanceAnalysis";

function Router() {
    return (
        <Routes>
            {/* Root route */}
            <Route path="/" element={<LandingPage />} />

            {/* Nested student routes */}
            <Route path="/student" element={<StudentDashboardStructure />}>
                <Route path="dashboard"  element={<StudentMainDashboardPage />}/>
                <Route path="performance-analysis"  element={<PerformanceAnalysis />}/>
                <Route path="login" element={<Loginpage />} />
                <Route path="signup" element={<Signup />} />
            </Route>

            {/* Nested teacher routes */}
            <Route path="/teacher">
                <Route path="dashboard" element={<TeacherDashboard />} />
                <Route
                    path="student-grading"
                    element={<ProjectGradingPage />}
                />
            </Route>
        </Routes>
    );
}

export default Router;
