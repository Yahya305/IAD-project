import { Router } from "express";
import { requestHandler } from "../utils/requestHandler.js";
import { authorizeOnlyInstructor } from "../middlewares/authorizationMiddleware.js";
import CompetitionController from "../controller/CompetitionController.js";

const CompetitionRouter = Router();

CompetitionRouter.post("/create-competition", (req, res, next) =>
    requestHandler(req, res, next, CompetitionController.createCompetition)
);

CompetitionRouter.get("/", (req, res, next) =>
    requestHandler(req, res, next, CompetitionController.fetchCompetitions)
);

export default CompetitionRouter;
