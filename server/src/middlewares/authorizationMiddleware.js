import extractTokenFromHeader from "../utils/extractTokenFromHeader.js";
import { verifyToken } from "../utils/JWTUtils.js";

export const authorizeUser = (req, res, next) => {
    try {
        const token = extractTokenFromHeader(req, res);
        const payload = verifyToken(token);
        req.user = payload;
        next();
    } catch (error) {
        if (error.name === "JsonWebTokenError") {
            return res.status(401).send("Invalid Token");
        } else if (error.name === "TokenExpiredError") {
            return res
                .status(401)
                .send("Session Timedout. Please Login Again.");
        }
    }
};
export const authorizeOnlyInstructor = (req, res, next) => {
    try {
        const token = extractTokenFromHeader(req, res);
        const payload = verifyToken(token);
        if (payload.userType !== "INSTRUCTOR") {
            return res
                .status(401)
                .send("Only your course instructor can perform this action.");
        }
        req.user = payload;
        next();
    } catch (error) {
        if (error.name === "JsonWebTokenError") {
            return res.status(401).send("Invalid Token");
        } else if (error.name === "TokenExpiredError") {
            return res
                .status(401)
                .send("Session Timedout. Please Login Again.");
        }
    }
};
