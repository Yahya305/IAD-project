import prisma from "../config/prismaConfig";

class StudentRepository {
    async fetchUserById(studentId) {
        return await prisma.student.findUnique({
            where: {
                studentId,
            },
        });
    }
    async fetchUserByIdOrThrow(studentId) {
        return await prisma.student.findUnique({
            where: {
                studentId,
            },
        });
    }
    async fetchUserBySeatNumber(seatNo) {
        return await prisma.student.findUnique({
            where: {
                seatNo,
            },
        });
    }
}

export default new StudentRepository();
