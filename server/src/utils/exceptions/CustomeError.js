export class CustomError extends Error {
    message;
    httpCode

    constructor(message, httpCode) {
        super(message);

        this.message = message;
        this.httpCode = httpCode;

        // Set the prototype explicitly
        Object.setPrototypeOf(this,CustomError.prototype)
    }
}