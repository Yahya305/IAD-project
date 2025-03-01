export const requestHandler = async (req, res, next, fn) => {
    try {
        res.status(200).json(await fn(req));
    } catch (err) {
        next(err); // Pass error to next middleware
    }
};
