import { Router } from "express";
import { requestHandler } from "../utils/requestHandler.js";
import { authorizeInstructor } from "../middlewares/authorizationMiddleware.js";
import CompetitionController from "../controller/CompetitionController.js";

const CompetitionRouter = Router();

CompetitionRouter.post("/", authorizeInstructor, (req, res, next) =>
    requestHandler(req, res, next, CompetitionController.createCompetition)
);

export default CompetitionRouter;
