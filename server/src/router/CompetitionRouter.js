import { Router } from "express";
import { requestHandler } from "../utils/requestHandler.js";
import { authorizeOnlyInstructor } from "../middlewares/authorizationMiddleware.js";
import CompetitionController from "../controller/CompetitionController.js";

const CompetitionRouter = Router();

CompetitionRouter.post("/", authorizeOnlyInstructor, (req, res, next) =>
    requestHandler(req, res, next, CompetitionController.createCompetition)
);

export default CompetitionRouter;
