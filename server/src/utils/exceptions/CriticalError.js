import HttpStatusCode from "../HttpStatusCode";
import { CustomError } from "./CustomError";

export class ThrowCriticalError extends Error {
    constructor(error) {
        super();
        throw new CustomError(
            error?.message || "Internal Server Error",
            error?.httpCode || HttpStatusCode.INTERNAL_SERVER_ERROR
        );
    }
}
