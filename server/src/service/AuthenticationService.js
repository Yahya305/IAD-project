import OTPRepository from "../repo/OTPRepository.js";
import { checkPassword } from "../utils/bcryptUtils.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";
import { signToken } from "../utils/JWTUtils.js";
import NodemailerService from "./NodemailerService.js";
import StudentService from "./StudentService.js";
import TeacherService from "./TeacherService.js";

class AuthenticationService {
    static async initiateSignup(email) {
        //save otp in db
        const otp = this.generateOTP();
        const expiresAt = new Date(Date.now() + 1 * 60 * 1000); // 1 minute from now
        await OTPRepository.saveOTP(email, expiresAt, otp);
        return await NodemailerService.sendOTP(email, otp);
    }

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

    static async studentRegister({ email, password, otp }) {
        // verify otp
        const otpData = await OTPRepository.fetchOTP(email);
        if (!otpData || otpData.otp !== otp || otpData.expiresAt < new Date()) {
            throw new CustomError("Invalid OTP.", HttpStatusCode.BAD_REQUEST);
        }
        const enrolledStudent = await StudentService.fetchStudentByEmail(email);

        if (!enrolledStudent) {
            throw new CustomError(
                "You are not enrolled in this course. Please contact the admin.",
                HttpStatusCode.BAD_REQUEST
            );
        }

        if (enrolledStudent.isActivated) {
            throw new CustomError(
                "You are already Registered. Try Loggin in.",
                HttpStatusCode.CONFLICT
            );
        }

        // Activate the student's account
        const activatedStudentAccount =
            await StudentService.activateStudentAccount({
                seatNo: enrolledStudent.seatNo,
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
        if (!student.isActivated) {
            throw new CustomError(
                "Your account is not activated. Please Signup.",
                HttpStatusCode.UNAUTHORIZED
            );
        }
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
            teamId: student.teamId,
        });

        const { password: _, ...studentData } = student;
        return studentData;
    }

    static generateOTP() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
}
export default AuthenticationService;
