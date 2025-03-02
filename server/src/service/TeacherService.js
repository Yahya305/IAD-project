import TeacherRepository from "../repo/TeacherRepository.js";
import { hashPassword } from "../utils/bcryptUtils.js";

class TeacherService {
    static async fetchTeacher() {
        const teacher = await TeacherRepository.fetchTeacher();
        return teacher;
    }

    static async setupTeacherConsole() {
        const hashedPwd = hashPassword(process.env.TEACHER_PASSWORD);
        await TeacherRepository.setupTeacherConsole({
            name: "Dr Humera Tariq",
            email: process.env.TEACHER_EMAIL,
            password: hashedPwd,
        });
    }
}
export default TeacherService;
