import React from "react";
import { Routes, Route } from "react-router";
import StudentDashboard from "../pages/student/dashboard";
import LandingPage from "../pages/landing-page";
import TeacherDashboard from "../pages/teacher/dashboard";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        </Routes>
    );
}

export default Router;
