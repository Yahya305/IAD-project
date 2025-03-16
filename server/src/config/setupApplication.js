import TeacherService from "../service/TeacherService.js";
import { seedStudentsData } from "../utils/seedStudentsData.js";
import prisma from "./prismaConfig.js";

export const setupApplication = async () => {
    // await prisma.student.deleteMany({});
    // await prisma.teacher.deleteMany({});
    // await prisma.team.deleteMany({});

    await TeacherService.setupTeacherConsole();

    await seedStudentsData();

};
