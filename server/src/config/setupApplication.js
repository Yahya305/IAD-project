import TeacherService from "../service/TeacherService.js";
import { seedStudentsData } from "../utils/seedStudentsData.js";

export const setupApplication = async () => {

    await TeacherService.setupTeacherConsole();

    await seedStudentsData();

};
