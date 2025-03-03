import { checkPassword } from "../utils/bcryptUtils.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";
import StudentService from "./StudentService.js";
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
        const { password: _, ..._teacher_data } = teacher;
        return _teacher_data;
    }

    static async studentRegister({ seatNo, email, password }) {
        const enrolledStudent = await StudentService.fetchStudentBySeatNo(
            seatNo
        );

        if (enrolledStudent.isActivated) {
            throw new CustomError(
                "You are already Registered. Try Loggin in.",
                HttpStatusCode.CONFLICT
            );
        }

        // Activate the student's account
        const activatedStudentAccount =
            await StudentService.activateStudentAccount({
                seatNo,
                email,
                password,
            });

        const { password: _, ...studentData } = activatedStudentAccount;
        return studentData;
    }

    static async studentLogin({ email, password }) {
        const student = await StudentService.fetchStudentByEmail(email);

        if (!student || !checkPassword(password, student.password)) {
            throw new CustomError(
                "Invalid Email or Password.",
                HttpStatusCode.UNAUTHORIZED
            );
        }
        const { password: _, ...studentData } = student;
        return studentData;
    }
}
export default AuthenticationService;
