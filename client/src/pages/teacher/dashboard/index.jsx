import React from 'react'
import { FaHome } from 'react-icons/fa'
import { BiAlarm } from "react-icons/bi";
import { FaAward } from "react-icons/fa6";
import { GiLightBulb } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";

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
		icon: <GiLightBulb />
	},
	{
		path: "/teacher/team-leaderboard",
		name: "Team Leaderboard",
		icon: <FaAward />
	},
	{
		path: "/teacher/student-leaderboard",
		name: "Student Leaderboard",
		icon: <MdLeaderboard />
	}
]
