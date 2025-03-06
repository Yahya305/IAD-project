import { CompetitionService } from "../service/CompetitionService.js";

class CompetitionController {
    static async createCompetition(req) {
        const { competitionName } = req.body;
        return await CompetitionService.startChallengeRound({
            competitionName,
        });
    }
    static async fetchCompetitions() {
        return await CompetitionService.fetchCompetitions();
    }
}
export default CompetitionController;
