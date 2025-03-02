export const requestHandler = async (req, res, next, fn) => {
    try {
        const Data = await fn(req);
        res.status(200).json(Data);
    } catch (err) {
        next(err);
    }
};
