import { Router } from "express";
import AuthenticationController from "../controller/AuthenticationController.js";
import { requestHandler } from "../utils/requestHandler.js";

const AuthenticationRouter = Router();

AuthenticationRouter.post("/admin-login", (req, res, next) =>
    requestHandler(req, res, next, AuthenticationController.teacherLogin)
);

export default AuthenticationRouter;
