import prisma from "../config/prismaConfig.js";

class StudentRepository {
    static async areStudentsSeeded() {
        const count = await prisma.student.count();
        return count !== 0;
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
