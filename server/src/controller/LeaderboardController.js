import StudentService from "../service/StudentService.js";

class LeaderboardController {
    static async fetchTeamLeaderboard(req) {
        const { section } = req.query;
        return await StudentService.fetchTeamLeaderboard({section});
    }
    static async fetchStudentsLeaderboard(req) {
        const { section } = req.query;
        return await StudentService.fetchStudentLeaderboard({section});
    }
}
export default LeaderboardController;
