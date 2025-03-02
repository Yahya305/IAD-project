import { Router } from "express";
import AuthenticationController from "../controller/AuthenticationController";
import { requestHandler } from "../utils/requestHandler";

const AuthenticationRouter = Router();

AuthenticationRouter.post("/login", (req, res, next) =>
    requestHandler(req, res, next, AuthenticationController.login)
);

export default AuthenticationRouter;
