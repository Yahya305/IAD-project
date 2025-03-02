import { ErrorHandler } from "../utils/exceptions/ErrorHandler.js";

const ErrorMiddleware = (err, req, res, next) => {
    // 3. Lastly, handle the error
    const errorHandler = new ErrorHandler();
    errorHandler.handleError(err, res);
};

export default ErrorMiddleware;
