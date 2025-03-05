import TeacherRepository from "../repo/TeacherRepository.js";
import { hashPassword } from "../utils/bcryptUtils.js";

class TeacherService {
    static async fetchTeacher() {
        const teacher = await TeacherRepository.fetchTeacher();
        return teacher;
    }

    static async createTeacher(name, email, password) {
        const hashedPwd = hashPassword(password);
        await TeacherRepository.setupTeacherConsole({
            name: name,
            email: email,
            password: hashedPwd,
        });
    }

}
export default TeacherService;
