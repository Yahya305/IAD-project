import { Router } from "express";
import { requestHandler } from "../utils/requestHandler.js";
import {
    authorizeOnlyInstructor,
    authorizeOnlyStudent,
    authorizeUser,
} from "../middlewares/authorizationMiddleware.js";
import ChallengeController from "../controller/ChallengeController.js";

const ChallengeRouter = Router();

ChallengeRouter.get(
    "/challenges-in-competition/:competitionId",
    authorizeUser,
    (req, res, next) =>
        requestHandler(
            req,
            res,
            next,
            ChallengeController.fetchAllChallengesInCompetition
        )
);

ChallengeRouter.get("/submissions", authorizeOnlyInstructor, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.fetchAllSubmissions)
);

ChallengeRouter.get("/assigned-challenges", authorizeUser, (req, res, next) =>
    requestHandler(
        req,
        res,
        next,
        ChallengeController.fetchAllAssignedChallenges
    )
);

ChallengeRouter.post("/create-challenge", (req, res, next) => {
    requestHandler(req, res, next, ChallengeController.startChallengeRound);
});

ChallengeRouter.post("/", authorizeOnlyInstructor, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.startChallengeRound)
);

ChallengeRouter.post(
    "/project-submission",
    authorizeOnlyStudent,
    (req, res, next) =>
        requestHandler(req, res, next, ChallengeController.submitProject)
);

ChallengeRouter.get("/challenge-details/:challengeId", (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.fetchChallengeDetails)
);

ChallengeRouter.post("/submit-grades", (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.submitGrades)
);

export default ChallengeRouter;
