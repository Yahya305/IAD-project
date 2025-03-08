import React from "react";
import { Routes, Route } from "react-router";
import StudentDashboard from "../pages/student/dashboard";
import LandingPage from "../pages/landing-page";
import TeacherDashboard from "../pages/teacher/dashboard";
import Loginpage from "../pages/student/login/Login";
import Signup from "../pages/student/login/signup";


function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
            <Route path="/student/login" element={<Loginpage/>} />
            <Route path="/student/Signup" element={<Signup/>} />
            

        </Routes>
    );
}

export default Router;
