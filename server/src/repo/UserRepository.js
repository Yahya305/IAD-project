import prisma from "../config/prismaConfig";

class StudentRepository{
    async fetchUserById(){
        await prisma.student
    }
}
export default new StudentRepository();