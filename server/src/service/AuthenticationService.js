import { checkPassword } from "../utils/bcryptUtils.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";
import { signToken } from "../utils/JWTUtils.js";
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

        const token = signToken({
            userId: teacher.teacherId,
            email: teacher.email,
            name: teacher.name,
            userType: "INSTRUCTOR",
        });

        teacher.token = token;

        const { password: _, ..._teacher_data } = teacher;
        return _teacher_data;
    }

    static async studentRegister({ email, seatNo, section, password }) {
        const enrolledStudent = await StudentService.fetchStudentBySeatNo(
            seatNo
        );

        const duplicateStudent = await StudentService.fetchStudentByEmail(
            email
        );

        if (enrolledStudent.isActivated || duplicateStudent) {
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

        activatedStudentAccount.token = signToken({
            userId: activatedStudentAccount.studentId,
            name: activatedStudentAccount.name,
            email: activatedStudentAccount.email,
            seatNo: activatedStudentAccount.seatNo,
            isActivated: activatedStudentAccount.isActivated,
            section: activatedStudentAccount.section,
            teamId: activatedStudentAccount.teamId,
            userType: "STUDENT",
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

        student.token = signToken({
            userId: student.studentId,
            email: student.email,
            name: student.name,
            section: student.section,
            userType: "STUDENT",
        });

        const { password: _, ...studentData } = student;
        return studentData;
    }
}
export default AuthenticationService;
