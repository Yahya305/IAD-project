import React from 'react'
import { FaHome } from 'react-icons/fa'
import { BiAlarm } from "react-icons/bi";

export const TeacherRoutes = [
	{
		path: "/teacher/dashboard",
		name: "Dashboard",
		icon: <FaHome />
	},
	{
		path: "/teacher/challenge-entry",
		name: "Challenge Creation",
		icon: <BiAlarm />
	},
	{
		path: "/teacher/competition-creation",
		name: "Competition Creation",
		icon: <FaHome />
	},
	{
		path: "/teacher/team-leaderboard",
		name: "Team Leaderboard",
		icon: <FaHome />
	},
	{
		path: "/teacher/student-leaderboard",
		name: "Student Leaderboard",
		icon: <FaHome />
	}
]
