import { Router } from "express";
import { requestHandler } from "../utils/requestHandler.js";
import { TeamController } from "../controller/TeamController.js";

const TeamRouter = Router();

TeamRouter.get("/", (req, res, next) =>
    requestHandler(req, res, next, TeamController.fetchAllTeams)
);

export default TeamRouter;
