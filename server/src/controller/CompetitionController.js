import { CompetitionService } from "../service/CompetitionService.js";

class CompetitionController {
    static async createCompetition(req) {
        const { comp_name, section, end_date } = req.body;
        return await CompetitionService.createCompitition({
            competitionName: comp_name,
            section,
            endDate: end_date,
        });
    }
    static async fetchCompetitions(req) {
        return await CompetitionService.fetchCompetitions();
    }
}
export default CompetitionController;
