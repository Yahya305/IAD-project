import { CustomError } from "./CustomError.js";
import { HttpStatusCode } from "./HttpStatusCode.js";
export class ErrorHandler {
    isTrustedError(error) {
        if (error instanceof CustomError) {
            return true;
        }
        return false;
    }

    handleTrustedError(error, response) {
        response.status(error.httpCode).json({ message: error.message });
    }

    handleCriticalError(error, response) {
        if (response) {
            console.trace(error);
            response
                .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
                .json({ message: "Internal server error" });
        }

        console.log("Application encountered a critical error");
        // process.exit(1);
    }

    handleError(error, response) {
        if (this.isTrustedError(error) && response) {
            this.handleTrustedError(error, response);
        } else {
            this.handleCriticalError(error, response);
        }
    }
}
