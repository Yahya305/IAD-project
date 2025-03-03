import StudentsRepository from "../repo/StudentsRepository.js";
import { hashPassword } from "../utils/bcryptUtils.js";
import { CustomError } from "../utils/exceptions/CustomError.js";
import { HttpStatusCode } from "../utils/exceptions/HttpStatusCode.js";

class StudentService {
    static async fetchStudentBySeatNo(seatNo) {
        const student = await StudentsRepository.fetchStudentBySeatNo(seatNo);
        if (!student) {
            throw new CustomError(
                "You are not Enrolled.",
                HttpStatusCode.BAD_REQUEST
            );
        }
        return student;
    }

    static async fetchStudentByEmail(email) {
        const student = await StudentsRepository.fetchStudentByEmail(email);
        // if (!student) {
        //     throw new CustomError(
        //         "Student Not Found.",
        //         HttpStatusCode.NOT_FOUND
        //     );
        // }
        return student;
    }

    static async activateStudentAccount({ seatNo, email, password }) {
        const activatedStudentAccount =
            await StudentsRepository.activateStudentAccount({
                seatNo,
                email,
                password:hashPassword(password),
            });
        return activatedStudentAccount;
    }
}
export default StudentService;
