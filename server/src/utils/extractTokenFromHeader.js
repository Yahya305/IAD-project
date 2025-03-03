const extractTokenFromHeader = (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send("Authorization Header Not Found.");
    }
    if (!authorization.startsWith("Bearer ")) {
        return res.status(401).send("Incorrect format of the auth token");
    }
    return authorization.split(" ")[1];
};

export default extractTokenFromHeader;