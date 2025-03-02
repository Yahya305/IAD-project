import TeacherService from "../service/TeacherService.js";

export const setupApplication = async () => {
    // Check if Teacher Console Exists
    const teacher = await TeacherService.fetchTeacher();
    if (!teacher) {
        // Setup teacher console
        await TeacherService.setupTeacherConsole();
    }
};
