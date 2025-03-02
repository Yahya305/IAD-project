import bcrypt from "bcryptjs";

export const hashPassword = (rawPassword) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(rawPassword, salt);
};

export const checkPassword = (enteredPassword, hashedPwd) => {
    return bcrypt.compareSync(enteredPassword, hashedPwd);
};
