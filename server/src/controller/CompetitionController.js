import { CompetitionService } from "../service/CompetitionService.js";

class CompetitionController {
    static async createCompetition(req) {
        const { competitionName, section, endDate } = req.body;
        return await CompetitionService.createCompitition({
            competitionName,
            section,
            endDate,
        });
    }
    static async fetchCompetitions(req) {
        return await CompetitionService.fetchCompetitions();
    }
}
export default CompetitionController;
