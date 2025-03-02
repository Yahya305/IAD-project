import prisma from "../config/prismaConfig.js";

class TeacherRepository {
    async setupTeacherConsole({ name, email, password }) {
        await prisma.teacher.create({
            data: {
                name,
                email,
                password,
            },
        });
    }
    async fetchTeacher() {
        const teacher = await prisma.teacher.findFirst();
        return teacher;
    }
}

export default new TeacherRepository();
