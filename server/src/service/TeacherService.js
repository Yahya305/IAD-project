import TeacherRepository from "../repo/TeacherRepository.js";
import { hashPassword } from "../utils/bcryptUtils.js";

class TeacherService {
    async fetchTeacher() {
        const teacher = await TeacherRepository.fetchTeacher();
        return teacher;
    }

    async setupTeacherConsole() {
        const hashedPwd = hashPassword(process.env.PASSWORD);
        await TeacherRepository.setupTeacherConsole({
            name: "Dr Humera Tariq",
            email: process.env.TEACHER_EMAIL,
            password: hashedPwd,
        });
    }
}
export default new TeacherService();
