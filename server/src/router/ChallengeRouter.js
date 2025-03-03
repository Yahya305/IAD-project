import { Router } from "express";
import { requestHandler } from "../utils/requestHandler.js";
import { authorizeStudent } from "../middlewares/authorizationMiddleware.js";
import ChallengeController from "../controller/ChallengeController.js";

const ChallengeRouter = Router();

ChallengeRouter.get("/", authorizeStudent, (req, res, next) =>
    requestHandler(req, res, next, ChallengeController.fetchAllChallenges)
);
// ChallengeRouter.post("/", (req, res, next) =>
//     requestHandler(req, res, next, ChallengeController.studentLogin)
// );
// ChallengeRouter.post("/:challengeId", (req, res, next) =>
//     requestHandler(req, res, next, ChallengeController.studentRegister)
// );

export default ChallengeRouter;
