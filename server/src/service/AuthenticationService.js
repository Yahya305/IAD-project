import { checkPassword } from "../utils/bcryptUtils.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";
import TeacherService from "./TeacherService.js";

class AuthenticationService {
    static async teacherLogin({ email, password }) {
        const teacher = await TeacherService.fetchTeacher();

        if (
            teacher.email !== email ||
            !checkPassword(password, teacher.password)
        ) {
            throw new CustomError(
                "Invalid Email or Password.",
                HttpStatusCode.UNAUTHORIZED
            );
        }
        const { password: _, ...data } = teacher;
        return data;
    }
}
export default AuthenticationService;
