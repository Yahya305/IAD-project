import { Router } from "express";
import AuthenticationController from "../controller/AuthenticationController";
import { requestHandler } from "../utils/requestHandler";

const AuthenticationRouter = Router();

AuthenticationRouter.post("/", upload.array("files"), (req, res, next) =>
    requestHandler(req, res, next, AuthenticationController.login)
);
AuthenticationRouter.get("/:vesselId", (req, res, next) =>
    requestHandler(req, res, next, AuthenticationController.fetchCOF)
);

export default AuthenticationRouter;
