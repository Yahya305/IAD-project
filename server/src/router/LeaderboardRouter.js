import { Router } from "express";
import StudentController from "../controller/StudentController.js";
import { requestHandler } from "../utils/requestHandler.js";
import LeaderboardController from "../controller/LeaderboardController.js";

const LeaderboardRouter = Router();

LeaderboardRouter.get("/fetch-students-leaderboard", (req, res, next) =>
    requestHandler(req, res, next, LeaderboardController.fetchStudentsLeaderboard)
);

LeaderboardRouter.get("/fetch-team-leaderboard", (req, res, next) =>
    requestHandler(req, res, next, LeaderboardController.fetchTeamLeaderboard)
);

export default LeaderboardRouter;
