import { Router } from "express";
import StudentController from "../controller/StudentController.js";
import { requestHandler } from "../utils/requestHandler.js";
import { authorizeUser } from "../middlewares/authorizationMiddleware.js";

const StudentRouter = Router();

StudentRouter.get("/all", authorizeUser, (req, res, next) =>
    requestHandler(req, res, next, StudentController.fetchAllStudents)
);

export default StudentRouter;
