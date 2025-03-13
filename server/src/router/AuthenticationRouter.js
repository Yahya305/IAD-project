import { Router } from "express";
import AuthenticationController from "../controller/AuthenticationController.js";
import { requestHandler } from "../utils/requestHandler.js";

const AuthenticationRouter = Router();

AuthenticationRouter.post("/admin-login", (req, res, next) =>
    requestHandler(req, res, next, AuthenticationController.teacherLogin)
);
AuthenticationRouter.post("/initiate-signup", (req, res, next) =>
    requestHandler(req, res, next, AuthenticationController.initiateSignup)
);
AuthenticationRouter.post("/login", (req, res, next) =>
    requestHandler(req, res, next, AuthenticationController.studentLogin)
);
AuthenticationRouter.post("/signup", (req, res, next) =>
    requestHandler(req, res, next, AuthenticationController.studentRegister)
);

export default AuthenticationRouter;
