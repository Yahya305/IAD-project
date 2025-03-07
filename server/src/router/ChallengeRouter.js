import { Router } from "express";
import { requestHandler } from "../utils/requestHandler.js";
import {
    authorizeInstructor,
    authorizeStudent,
} from "../middlewares/authorizationMiddleware.js";
import ChallengeController from "../controller/ChallengeController.js";

const ChallengeRouter = Router();

ChallengeRouter.get("/challenges-in-competition/:competitionId", authorizeStudent, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.fetchAllChallengesInCompetition)
);


ChallengeRouter.post("/", authorizeInstructor, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.startChallengeRound)
);
ChallengeRouter.post("/project-submission", authorizeInstructor, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.submitProject)
);

// ChallengeRouter.post("/:challengeId", (req, res, next) =>
//     requestHandler(req, res, next, ChallengeController.studentRegister)
// );

export default ChallengeRouter;
