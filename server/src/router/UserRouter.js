import { Router } from "express";
import { requestHandler } from "../utils/requestHandler.js";
import UserController from "../controller/UserController.js";
import { authorizeUser } from "../middlewares/authorizationMiddleware.js";

const UserRouter = Router();

UserRouter.get("/", authorizeUser, (req, res, next) =>
    requestHandler(req, res, next, UserController.fetchUser)
);

export default UserRouter;
