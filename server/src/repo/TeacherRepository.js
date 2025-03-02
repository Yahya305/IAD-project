import prisma from "../config/prismaConfig.js";

class TeacherRepository {
    static async setupTeacherConsole({ name, email, password }) {
        await prisma.teacher.create({
            data: {
                name,
                email,
                password,
            },
        });
    }
    static async fetchTeacher() {
        const teacher = await prisma.teacher.findFirst();
        return teacher;
    }
}

export default TeacherRepository;
