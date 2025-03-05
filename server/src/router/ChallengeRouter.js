import { Router } from "express";
import { requestHandler } from "../utils/requestHandler.js";
import {
    authorizeInstructor,
    authorizeStudent,
} from "../middlewares/authorizationMiddleware.js";
import ChallengeController from "../controller/ChallengeController.js";

const ChallengeRouter = Router();

ChallengeRouter.get("/", authorizeStudent, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.fetchAllChallenges)
);

ChallengeRouter.post("/", authorizeInstructor, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.startChallengeRound)
);
ChallengeRouter.post("/competition", authorizeInstructor, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.fetchCompetitionAllChallenges)
);

// ChallengeRouter.post("/:challengeId", (req, res, next) =>
//     requestHandler(req, res, next, ChallengeController.studentRegister)
// );

export default ChallengeRouter;
