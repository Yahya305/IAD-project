import prisma from "../config/prismaConfig.js";

class StudentRepository {
    static async fetchStudentByEmail(email) {
        const student = await prisma.student.findUnique({ where: { email } });
        return student;
    }

    static async fetchStudentBySeatNo(seatNo) {
        const student = await prisma.student.findUnique({ where: { seatNo } });
        return student;
    }

    static async areStudentsSeeded() {
        const count = await prisma.student.count();
        return count !== 0;
    }

    static async activateStudentAccount({ seatNo, email, password }) {
        const activatedStudentAccount = await prisma.student.update({
            where: {
                seatNo,
            },
            data: { email, password, isActivated: true },
        });
        return activatedStudentAccount;
    }

    static async seedStudents(studentsData) {
        // Insert students into the database
        try {
            const createdStudents = await prisma.student.createMany({
                data: studentsData,
                skipDuplicates: true,
            });
            console.log(`Seeded ${createdStudents.count} Students.`);
        } catch (error) {
            console.error("Error Seeding Students Data:\n", error);
        }
    }
}

export default StudentRepository;
