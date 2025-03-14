import StudentService from "../service/StudentService.js";

class StudentController {
    static async fetchAllStudents(req) {
        const { size, offset } = req.query;
        return await StudentService.fetchAllStudents(+size, +offset);
    }
    static async fetchAllStudentProgress() {
        
    }
}
export default StudentController;
