import { Router } from "express";
import { requestHandler } from "../utils/requestHandler.js";
import {
    authorizeOnlyInstructor,
    authorizeUser,
} from "../middlewares/authorizationMiddleware.js";
import ChallengeController from "../controller/ChallengeController.js";

const ChallengeRouter = Router();

ChallengeRouter.get("/challenges-in-competition/:competitionId", authorizeUser, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.fetchAllChallengesInCompetition)
);


ChallengeRouter.post("/", authorizeOnlyInstructor, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.startChallengeRound)
);
ChallengeRouter.post("/project-submission", authorizeOnlyInstructor, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.submitProject)
);

// ChallengeRouter.post("/:challengeId", (req, res, next) =>
//     requestHandler(req, res, next, ChallengeController.studentRegister)
// );

export default ChallengeRouter;
