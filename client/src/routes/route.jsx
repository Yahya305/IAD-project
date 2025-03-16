import React from "react";
import { Routes, Route } from "react-router";
import withAuth from "../utils/withAuth";

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
import TeacherTeamLeaderboard from "../pages/teacher/dashboard-inner-pages/TeamLeaderboard/TeamLeaderboard.jsx";
import StudentLeaderboardForTeacher from "../pages/teacher/dashboard-inner-pages/StudentLeaderboard/StudentLeaderboard.jsx";
import TeacherMainDashboard from "../pages/teacher/dashboard-inner-pages/TeacherMainDashboard/TeacherMainDashboard.jsx";
import ChallengeGrading from "../pages/teacher/dashboard-inner-pages/ChallengeGrading/ChallengeGrading.jsx";
import TeacherLoginPage from "../pages/teacher/authentication/Login.jsx";

// Apply withAuth HOC to protected components
const ProtectedStudentDashboard = withAuth(['STUDENT'])(StudentDashboardStructure);
const ProtectedTeacherDashboard = withAuth(['INSTRUCTOR'])(StudentDashboardStructure);
const ProtectedStudentMainDashboard = withAuth(['STUDENT'])(StudentMainDashboardPage);
const ProtectedPerformanceAnalysis = withAuth(['STUDENT'])(PerformanceAnalysisPage);
const ProtectedStudentProgress = withAuth(['STUDENT'])(StudentProgressPage);
const ProtectedStudentTeamLeaderboard = withAuth(['STUDENT'])(TeamLeaderboard);

const ProtectedTeacherMainDashboard = withAuth(['INSTRUCTOR'])(TeacherMainDashboard);
const ProtectedStudentLeaderboardForTeacher = withAuth(['INSTRUCTOR'])(StudentLeaderboardForTeacher);
const ProtectedTeacherTeamLeaderboard = withAuth(['INSTRUCTOR'])(TeacherTeamLeaderboard);
const ProtectedChallengeGrading = withAuth(['INSTRUCTOR'])(ChallengeGrading);
const ProtectedChallengeEntry = withAuth(['INSTRUCTOR'])(ChallengeEntry);
const ProtectedProjectGrading = withAuth(['INSTRUCTOR'])(ProjectGradingPage);
const ProtectedCreateCompetition = withAuth(['INSTRUCTOR'])(CreateCompetition);

function Router() {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/student/login" element={<Loginpage />} />
            <Route path="/student/signup" element={<Signup />} />
            <Route path="/teacher/login" element={<TeacherLoginPage />} />

            {/* Protected student routes */}
            <Route
                path="/student"
                element={<ProtectedStudentDashboard routes={StudentRoutes} />}
            >
                <Route
                    path="dashboard"
                    element={<ProtectedStudentMainDashboard />}
                />
                <Route
                    path="performance-analysis"
                    element={<ProtectedPerformanceAnalysis />}
                />
                <Route 
                    path="std-progress" 
                    element={<ProtectedStudentProgress />} 
                />
                <Route 
                    path="team-leaderboard" 
                    element={<ProtectedStudentTeamLeaderboard />} 
                />
            </Route>

            {/* Protected teacher routes */}
            <Route
                path="/teacher"
                element={<ProtectedTeacherDashboard routes={TeacherRoutes} />}
            >
                <Route 
                    path="dashboard" 
                    element={<ProtectedTeacherMainDashboard />} 
                />
                <Route
                    path="student-leaderboard"
                    element={<ProtectedStudentLeaderboardForTeacher />}
                />
                <Route
                    path="team-leaderboard"
                    element={<ProtectedTeacherTeamLeaderboard />}
                />
                <Route
                    path="challenge-grading/:challengeId"
                    element={<ProtectedChallengeGrading />}
                />
                <Route 
                    path="challenge-entry" 
                    element={<ProtectedChallengeEntry />} 
                />
                <Route
                    path="student-grading"
                    element={<ProtectedProjectGrading />}
                />
                <Route
                    path="competition-creation"
                    element={<ProtectedCreateCompetition />}
                />
            </Route>
        </Routes>
    );
}

export default Router;
