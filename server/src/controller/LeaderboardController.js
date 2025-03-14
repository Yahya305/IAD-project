import StudentService from "../service/StudentService.js";

class LeaderboardController {
    static async fetchStudentsLeaderboard(req) {
        const { section } = req.query;
        return await StudentService.fetchStudentLeaderboard({ section });
    }
    static async fetchTeamLeaderboard(req) {
        const { section } = req.query;
        return await StudentService.fetchTeamLeaderboard({ section });
    }
}
export default LeaderboardController;
