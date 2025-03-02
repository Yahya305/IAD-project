import jwt from "jsonwebtoken";

export const signToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "10 days",
    });
    return token;
};

export const verifyToken = (token) => {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
};

