import prisma from "../config/prismaConfig";

class StudentRepository {
    static async fetchUserById(studentId) {
        return await prisma.student.findUnique({
            where: {
                studentId,
            },
        });
    }
    static async fetchUserByIdOrThrow(studentId) {
        return await prisma.student.findUnique({
            where: {
                studentId,
            },
        });
    }
    static async fetchUserBySeatNumber(seatNo) {
        return await prisma.student.findUnique({
            where: {
                seatNo,
            },
        });
    }
}

export default StudentRepository;
